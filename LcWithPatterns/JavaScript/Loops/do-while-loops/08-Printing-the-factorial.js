"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let n = 50;
let i = 1;
let factorial = 1;
do {
    factorial = factorial * i;
    i++;
} while (i <= n);
console.log(`The factorial of the number ${n} is ${factorial}`);
