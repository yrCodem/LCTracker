"use strict";
// Reverse the number and print the given Reverse number
Object.defineProperty(exports, "__esModule", { value: true });
let num = 578384;
let reversedNum = 0;
do {
    let digit = num % 10;
    reversedNum = reversedNum * 10 + digit;
    num = Math.floor(num / 10);
} while (num > 0);
console.log(`The reversed digits are: ${reversedNum}`);
