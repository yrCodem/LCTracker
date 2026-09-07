import chokidar from "chokidar";
import dotenv from "dotenv";
import fs from "node:fs/promises";
import path from "node:path";
import { execFile } from "node:child_process";
import { promisify } from "node:util";
import { GoogleGenAI } from "@google/genai";

const execFileAsync = promisify(execFile);

dotenv.config();

const PROJECT_ROOT = process.cwd();

const SOURCE_DIR = path.join(
    PROJECT_ROOT,
    "LcWithPatterns",
    "TypeScript"
);

const PYTHON_DIR = path.join(
    PROJECT_ROOT,
    "LcWithPatterns",
    "Python"
);

const MODEL = process.env.GEMINI_MODEL || "gemini-3.7-flash";

if (!process.env.GEMINI_API_KEY) {
    console.error("❌ GEMINI_API_KEY is missing in .env");
    process.exit(1);
}

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
});

const pendingTimers = new Map<string, NodeJS.Timeout>();


function getPythonPath(tsFilePath: string): string {
    const relativePath = path.relative(
        SOURCE_DIR,
        tsFilePath
    );

    const pythonRelativePath = relativePath.replace(
        /\.tsx?$/,
        ".py"
    );

    return path.join(
        PYTHON_DIR,
        pythonRelativePath
    );
}


function isTypeScriptFile(filePath: string): boolean {
    return /\.tsx?$/.test(filePath);
}


async function validatePython(
    pythonFilePath: string
): Promise<boolean> {
    try {
        await execFileAsync(
            "python3",
            [
                "-c",
                `
import sys

with open(sys.argv[1], "r", encoding="utf-8") as f:
    source = f.read()

compile(source, sys.argv[1], "exec")
                `,
                pythonFilePath,
            ]
        );

        return true;

    } catch (error) {
        const err = error as {
            stderr?: string;
            message?: string;
        };

        console.error(
            `❌ Python validation failed for ${path.relative(
                PROJECT_ROOT,
                pythonFilePath
            )}`
        );

        console.error(
            err.stderr || err.message || error
        );

        return false;
    }
}

function buildPrompt(sourceCode: string): string {
    return `
You are an expert competitive programming translator.

Convert the supplied TypeScript LeetCode solution into
equivalent, clean, idiomatic Python.

Rules:

1. Preserve the exact algorithm.
2. Preserve time complexity.
3. Preserve space complexity.
4. Preserve the program's behavior.
5. Translate TypeScript data structures into appropriate
   Python equivalents.
6. Convert Map to dict when appropriate.
7. Convert Set to set.
8. Convert arrays to lists.
9. Convert TypeScript type annotations into appropriate
   Python type hints when useful.
10. Convert console.log to print.
11. Convert JavaScript/TypeScript syntax into valid Python.
12. Keep the original function and variable naming whenever
    practical.
13. Do not add explanations.
14. Do not add Markdown.
15. Do not use code fences.
16. Return ONLY executable Python source code.

TypeScript source:

${sourceCode}
`;
}


async function convertFile(
    tsFilePath: string
): Promise<void> {
    try {
        if (!isTypeScriptFile(tsFilePath)) {
            return;
        }

        console.log(
            `\n🔄 Converting: ${path.relative(
                PROJECT_ROOT,
                tsFilePath
            )}`
        );

        const sourceCode = await fs.readFile(
            tsFilePath,
            "utf8"
        );

        if (!sourceCode.trim()) {
            console.log("⚠️ Skipping empty TypeScript file.");
            return;
        }

        const prompt = buildPrompt(sourceCode);

        const response = await ai.interactions.create({
            model: MODEL,
            input: prompt,
        });

        const pythonCode = response.output_text.trim();

        if (!pythonCode) {
            throw new Error(
                "Gemini returned empty Python code."
            );
        }

        const pythonFilePath = getPythonPath(
            tsFilePath
        );

        await fs.mkdir(
            path.dirname(pythonFilePath),
            {
                recursive: true,
            }
        );

        const tempPythonPath = `${pythonFilePath}.tmp`;

        await fs.writeFile(
            tempPythonPath,
            `${pythonCode}\n`,
            "utf8"
        );

        const isValid = await validatePython(
            tempPythonPath
        );

        if (!isValid) {
            console.error(
                `⚠️ Generated Python was rejected: ${path.relative(
                    PROJECT_ROOT,
                    pythonFilePath
                )}`
            );

            await fs.unlink(tempPythonPath).catch(() => {});

            return;
        }

        await fs.rename(
            tempPythonPath,
            pythonFilePath
        );

        console.log(
            `✅ Generated: ${path.relative(
                PROJECT_ROOT,
                pythonFilePath
            )}`
        );

    } catch (error) {
        console.error("❌ Conversion failed:");
        console.error(error);
    }
}


function scheduleConversion(
    filePath: string
): void {
    if (!isTypeScriptFile(filePath)) {
        return;
    }

    const existingTimer = pendingTimers.get(
        filePath
    );

    if (existingTimer) {
        clearTimeout(existingTimer);
    }

    const timer = setTimeout(
        async () => {
            pendingTimers.delete(filePath);

            await convertFile(filePath);
        },
        1200
    );

    pendingTimers.set(
        filePath,
        timer
    );
}


console.log(
    "🐍 TypeScript → Python watcher started"
);

console.log(
    `📂 Watching: ${path.relative(
        PROJECT_ROOT,
        SOURCE_DIR
    )}`
);

console.log(
    `📂 Python output: ${path.relative(
        PROJECT_ROOT,
        PYTHON_DIR
    )}`
);


const watcher = chokidar.watch(
    SOURCE_DIR,
    {
        // Chokidar recursively watches the directory.
        // JavaScript, Python, and node_modules are excluded.
        ignoreInitial: true,
        ignored: [
            /(^|[/\\])node_modules([/\\]|$)/,
            /JavaScript/,
            /Python/,
        ],
    }
);


watcher.on(
    "add",
    (filePath) => {
        scheduleConversion(filePath);
    }
);


watcher.on(
    "change",
    (filePath) => {
        scheduleConversion(filePath);
    }
);


watcher.on(
    "unlink",
    async (filePath) => {
        if (!isTypeScriptFile(filePath)) {
            return;
        }

        const pythonFilePath = getPythonPath(
            filePath
        );

        try {
            await fs.unlink(
                pythonFilePath
            );

            console.log(
                `🗑️ Removed: ${path.relative(
                    PROJECT_ROOT,
                    pythonFilePath
                )}`
            );
        } catch {
            // The Python file may not exist.
        }
    }
);


watcher.on(
    "ready",
    () => {
        console.log("👀 File watcher is ready.");
    }
);


watcher.on(
    "error",
    (error) => {
        console.error(
            "❌ File watcher error:",
            error
        );
    }
);


process.on(
    "SIGINT",
    async () => {
        console.log(
            "\n🛑 Stopping TypeScript → Python watcher..."
        );

        for (const timer of pendingTimers.values()) {
            clearTimeout(timer);
        }

        pendingTimers.clear();

        await watcher.close();

        process.exit(0);
    }
);
