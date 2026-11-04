"use strict";
// Calculate and print the sum of Even and Odd digits seperately
Object.defineProperty(exports, "__esModule", { value: true });
let num = 75834;
let even = 0;
let odd = 0;
let digit;
do {
    digit = num % 10;
    if (digit % 2 === 0) {
        even += digit;
    }
    else {
        odd += digit;
    }
    num = Math.floor(num / 10);
} while (num > 0);
console.log(`Sum of even digits: ${even}`);
console.log(`Sum of odd digits: ${odd}`);
