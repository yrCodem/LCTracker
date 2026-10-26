"use strict";
// Count and print the number of digits in the given number. 
Object.defineProperty(exports, "__esModule", { value: true });
let num = 4567476878;
let count = 0;
do {
    count++;
    num = Math.floor(num / 10);
} while (num > 0);
console.log(`The number of digits in ${num} is: ${count}`);
