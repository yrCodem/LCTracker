"use strict";
// // Printing the fibonacci series up to n terms using a do-while loop in TypeScript
Object.defineProperty(exports, "__esModule", { value: true });
let n = 10;
let a = 0;
let b = 1;
let count = 1;
do {
    console.log(a);
    let nextNum = a + b;
    a = b;
    b = nextNum;
    count++;
} while (count <= n);
console.log(`The Fibonacci series of number ${n} is ${a}`);
