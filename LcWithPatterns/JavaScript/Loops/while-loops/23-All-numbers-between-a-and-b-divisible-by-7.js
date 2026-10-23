"use strict";
// Print all the numbers between a and b that are divisible by 7 using a while loop in TypeScript
Object.defineProperty(exports, "__esModule", { value: true });
let a = 1;
let b = 100;
let i = a;
while (i <= b) {
    if (i % 7 === 0) {
        console.log(i);
    }
    i++;
}
