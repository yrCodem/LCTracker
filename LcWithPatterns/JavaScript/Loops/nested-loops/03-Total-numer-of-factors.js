"use strict";
// For every number from 1 to n, count and print the total number of its factors
Object.defineProperty(exports, "__esModule", { value: true });
let n = 132;
let count = 0;
for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
        console.log(i);
        count++;
    }
}
console.log(`The total number of factors of ${n} are ${count}`);
