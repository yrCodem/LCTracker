"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let num = 12321;
let original = num;
let reversedNum = 0;
do {
    let digit = num % 10;
    reversedNum = reversedNum * 10 + digit;
    num = Math.floor(num / 10);
} while (num > 0);
if (original === reversedNum) {
    console.log(`The given number ${original} is a Palindrome number`);
}
else {
    console.log(`The given number ${original} is not a Palindrome number`);
}
