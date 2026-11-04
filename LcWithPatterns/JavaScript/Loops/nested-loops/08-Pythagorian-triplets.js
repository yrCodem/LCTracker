"use strict";
// Print all the pythagorian triplets whose values are less than n
Object.defineProperty(exports, "__esModule", { value: true });
let n = 20;
for (let a = 1; a <= n; a++) {
    for (let b = a + 1; b <= n; b++) {
        for (let c = b + 1; c <= n; c++) {
            if (a * a + b * b === c * c) {
                console.log(`${a}, ${b}, ${c}`);
            }
        }
    }
}
