# 🚀 LCTracker

A multi-language LeetCode practice repository designed to help track Data Structures, Algorithms, and LeetCode patterns across multiple programming languages.

The project allows you to write solutions in **TypeScript** and automatically generate equivalent implementations in:

- 🟦 JavaScript
- 🐍 Python

This creates a structured environment for practicing DSA while comparing syntax, data structures, and approaches across languages.

---

## ✨ Features

- 📝 Write LeetCode solutions in TypeScript
- ⚡ Automatically compile TypeScript → JavaScript
- 🤖 Automatically convert TypeScript → Python using Gemini AI
- 👀 Real-time file watching
- 📁 Preserves folder structure across languages
- ✅ Python syntax validation
- 🧹 Automatic cleanup when source files are deleted
- 🗂️ Organized by LeetCode patterns and data structures

---

# 📂 Project Structure

```text
LCTracker/
│
├── LcWithPatterns/
│   │
│   ├── TypeScript/          # Main TypeScript solutions
│   │   ├── HashMap/
│   │   ├── Stack/
│   │   ├── Array/
│   │   ├── Loops/
│   │   └── String/
│   │
│   ├── JavaScript/          # Automatically generated JavaScript
│   │   ├── HashMap/
│   │   └── Stack/
│   │
│   └── Python/              # AI-generated Python solutions
│       ├── HashMap/
│       └── Stack/
│
├── tools/
│   └── ts-to-python.ts      # TypeScript → Python converter
│
├── tsconfig.json
├── package.json
├── .env
├── .gitignore
└── README.md