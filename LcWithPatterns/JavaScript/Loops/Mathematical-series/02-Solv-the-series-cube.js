"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Calculate and print the value of the series
// 1³ + 2³ + 3³ + … + n³
``;
let n = 10;
let sum = 0;
for (let i = 1; i <= n; i++) {
    sum += i * i * i;
}
console.log("Sum of series:", sum);
