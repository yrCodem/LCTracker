"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum = sum + i;
    if (sum > 100)
        break;
    console.log(i);
}
