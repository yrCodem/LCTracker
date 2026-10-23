"use strict";
// Sum of Fibonacci series up to n terms using a while loop in TypeScript
Object.defineProperty(exports, "__esModule", { value: true });
let num = 7;
let a = 0;
let b = 1;
let counter = 1;
let sum = 0;
while (counter <= num) {
    sum = sum + a;
    let nextNumber = a + b;
    a = b;
    b = nextNumber;
    counter++;
}
console.log(sum);
