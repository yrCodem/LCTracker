import chokidar from "chokidar";
import dotenv from "dotenv";
import fs from "node:fs/promises";
import os from "node:os";
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

const CPP_DIR = path.join(
    PROJECT_ROOT,
    "LcWithPatterns",
    "Cpp"
);

const JAVA_DIR = path.join(
    PROJECT_ROOT,
    "LcWithPatterns",
    "Java"
);

const MODEL =
    process.env.GEMINI_MODEL || "gemini-3.5-flash-lite";

if (!process.env.GEMINI_API_KEY) {
    console.error("❌ GEMINI_API_KEY is missing in .env");
    process.exit(1);
}

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
});

const pendingTimers = new Map<string, NodeJS.Timeout>();


function isTypeScriptFile(filePath: string): boolean {
    return /\.tsx?$/.test(filePath);
}


function getOutputPaths(tsFilePath: string) {
    const relativePath = path.relative(
        SOURCE_DIR,
        tsFilePath
    );

    const cppRelativePath = relativePath.replace(
        /\.tsx?$/,
        ".cpp"
    );

    const javaRelativePath = relativePath.replace(
        /\.tsx?$/,
        ".java"
    );

    return {
        cpp: path.join(CPP_DIR, cppRelativePath),
        java: path.join(JAVA_DIR, javaRelativePath),
    };
}


function buildPrompt(sourceCode: string): string {
    return `
You are an expert competitive programming translator.

Convert the supplied TypeScript LeetCode solution into
equivalent C++17 and Java solutions.

GENERAL RULES:

1. Preserve the exact algorithm and behavior.
2. Preserve time complexity.
3. Preserve space complexity.
4. Keep function and variable names whenever practical.
5. Use appropriate language-specific data structures.
6. Do not add explanations.
7. Do not add Markdown or code fences.
8. Do not invent additional functionality.
9. Omit console.log statements and test-case execution code.
10. Produce LeetCode-compatible solutions.

C++ RULES:

1. Use C++17.
2. Include <bits/stdc++.h>.
3. Use namespace std.
4. Put the solution inside class Solution.
5. Put methods under public:.
6. Use appropriate STL containers and algorithms.
7. Do not include a main() function.

JAVA RULES:

1. Use standard Java syntax.
2. Include import java.util.*; when needed.
3. Put the solution inside class Solution.
4. Do not declare Solution as public.
5. Use appropriate Java collections and data structures.
6. Use valid Java method signatures and return types.
7. Do not include a main() method.

OUTPUT FORMAT:

Return ONLY valid JSON in exactly this structure:

{
  "cpp": "complete C++17 source code",
  "java": "complete Java source code"
}

The code values must be JSON strings with properly escaped
newlines and quotation marks.

TypeScript source:

${sourceCode}
`;
}


function parseGeneratedCode(responseText: string): {
    cpp: string;
    java: string;
} {
    const cleanedResponse = responseText
        .trim()
        .replace(/^```(?:json)?\s*/i, "")
        .replace(/\s*```$/, "");

    const start = cleanedResponse.indexOf("{");
    const end = cleanedResponse.lastIndexOf("}");

    if (start === -1 || end === -1 || end <= start) {
        throw new Error("Gemini did not return valid JSON.");
    }

    const parsed = JSON.parse(
        cleanedResponse.slice(start, end + 1)
    );

    if (
        typeof parsed.cpp !== "string" ||
        typeof parsed.java !== "string"
    ) {
        throw new Error(
            "Gemini response must contain both cpp and java strings."
        );
    }

    return {
        cpp: parsed.cpp.trim(),
        java: parsed.java.trim(),
    };
}


async function validateCpp(filePath: string): Promise<boolean> {
    try {
        await execFileAsync(
            "g++",
            [
                "-std=c++17",
                "-fsyntax-only",
                filePath,
            ]
        );

        return true;
    } catch (error) {
        const err = error as {
            stderr?: string;
            message?: string;
        };

        console.error("❌ C++ validation failed:");
        console.error(err.stderr || err.message || error);

        return false;
    }
}


async function validateJava(filePath: string): Promise<boolean> {
    const tempDir = await fs.mkdtemp(
        path.join(os.tmpdir(), "lctracker-java-")
    );

    try {
        await execFileAsync(
            "javac",
            [
                "-d",
                tempDir,
                filePath,
            ]
        );

        return true;
    } catch (error) {
        const err = error as {
            stderr?: string;
            message?: string;
        };

        console.error("❌ Java validation failed:");
        console.error(err.stderr || err.message || error);

        return false;
    } finally {
        await fs.rm(tempDir, {
            recursive: true,
            force: true,
        });
    }
}


async function convertFile(tsFilePath: string): Promise<void> {
    if (!isTypeScriptFile(tsFilePath)) {
        return;
    }

    let cppTempPath: string | undefined;
    let javaTempPath: string | undefined;

    try {
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

        const response = await ai.interactions.create({
            model: MODEL,
            input: buildPrompt(sourceCode),
        });

        const generated = parseGeneratedCode(
            response.output_text
        );

        if (!generated.cpp || !generated.java) {
            throw new Error(
                "Gemini returned empty C++ or Java code."
            );
        }

        const outputPaths = getOutputPaths(tsFilePath);

        await fs.mkdir(path.dirname(outputPaths.cpp), {
            recursive: true,
        });

        await fs.mkdir(path.dirname(outputPaths.java), {
            recursive: true,
        });

        // cppTempPath = `${outputPaths.cpp}.tmp`;
        // javaTempPath = `${outputPaths.java}.tmp`;

        cppTempPath = outputPaths.cpp.replace(/\.cpp$/, ".tmp.cpp");
        javaTempPath = outputPaths.java.replace(/\.java$/, ".tmp.java");

        await fs.writeFile(
            cppTempPath,
            `${generated.cpp}\n`,
            "utf8"
        );

        await fs.writeFile(
            javaTempPath,
            `${generated.java}\n`,
            "utf8"
        );

        console.log("🔍 Validating generated C++...");

        const cppValid = await validateCpp(cppTempPath);

        console.log("🔍 Validating generated Java...");

        const javaValid = await validateJava(javaTempPath);

        if (!cppValid || !javaValid) {
            console.error(
                "⚠️ Generated files rejected. Existing outputs were preserved."
            );

            return;
        }

        await fs.rename(cppTempPath, outputPaths.cpp);
        cppTempPath = undefined;

        await fs.rename(javaTempPath, outputPaths.java);
        javaTempPath = undefined;

        console.log(
            `✅ C++ generated: ${path.relative(
                PROJECT_ROOT,
                outputPaths.cpp
            )}`
        );

        console.log(
            `✅ Java generated: ${path.relative(
                PROJECT_ROOT,
                outputPaths.java
            )}`
        );

    } catch (error) {
        console.error("❌ Conversion failed:");
        console.error(error);
    } finally {
        if (cppTempPath) {
            await fs.unlink(cppTempPath).catch(() => {});
        }

        if (javaTempPath) {
            await fs.unlink(javaTempPath).catch(() => {});
        }
    }
}


function scheduleConversion(filePath: string): void {
    if (!isTypeScriptFile(filePath)) {
        return;
    }

    const existingTimer = pendingTimers.get(filePath);

    if (existingTimer) {
        clearTimeout(existingTimer);
    }

    const timer = setTimeout(async () => {
        pendingTimers.delete(filePath);
        await convertFile(filePath);
    }, 1200);

    pendingTimers.set(filePath, timer);
}


console.log("🚀 TypeScript → C++ & Java watcher started");

console.log(
    `📂 Watching: ${path.relative(PROJECT_ROOT, SOURCE_DIR)}`
);

console.log(
    `📂 C++ output: ${path.relative(PROJECT_ROOT, CPP_DIR)}`
);

console.log(
    `📂 Java output: ${path.relative(PROJECT_ROOT, JAVA_DIR)}`
);


const watcher = chokidar.watch(SOURCE_DIR, {
    ignoreInitial: true,
    ignored: [
        /(^|[/\\])node_modules([/\\]|$)/,
    ],
});


watcher.on("add", scheduleConversion);

watcher.on("change", scheduleConversion);


watcher.on("unlink", async (filePath) => {
    if (!isTypeScriptFile(filePath)) {
        return;
    }

    const outputPaths = getOutputPaths(filePath);

    await Promise.all([
        fs.unlink(outputPaths.cpp).catch(() => {}),
        fs.unlink(outputPaths.java).catch(() => {}),
    ]);

    console.log(
        `🗑️ Removed generated C++ and Java files for: ${path.relative(
            PROJECT_ROOT,
            filePath
        )}`
    );
});


watcher.on("ready", () => {
    console.log("👀 C++ and Java watcher is ready.");
});


watcher.on("error", (error) => {
    console.error("❌ File watcher error:", error);
});


process.on("SIGINT", async () => {
    console.log("\n🛑 Stopping C++ and Java watcher...");

    for (const timer of pendingTimers.values()) {
        clearTimeout(timer);
    }

    pendingTimers.clear();

    await watcher.close();

    process.exit(0);
});