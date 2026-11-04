"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let n = [10, 20, 30, 40, 50];
let target = 30;
let found = false;
for (let i = 1; i <= n.length; i++) {
    if (n[i] === target) {
        found = true;
        console.log(`The number ${target} is found at the index ${i}`);
        break;
    }
}
