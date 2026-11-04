"use strict";
// Generate and print the number triangle pattern 
Object.defineProperty(exports, "__esModule", { value: true });
let n = 5;
for (let i = 1; i <= n; i++) {
    let pattern = "";
    for (let j = 1; j <= i; j++) {
        pattern += j;
    }
    console.log(pattern);
}
