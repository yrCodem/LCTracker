"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let n = 100;
for (let i = 1; i <= n; i++) {
    if (i % 17 === 0) {
        continue;
    }
    console.log(i);
}
