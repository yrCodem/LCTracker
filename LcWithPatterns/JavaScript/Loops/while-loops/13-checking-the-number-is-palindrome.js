"use strict";
// Checking the given number is palindrome or not
Object.defineProperty(exports, "__esModule", { value: true });
let num = 12321;
let original = num; // Store the original number to compare later
let reversedNum = 0; // Start with 0 as the reversed number
while (num > 0) {
    let digit = num % 10;
    reversedNum = reversedNum * 10 + digit;
    num = Math.floor(num / 10); // Remove the last digit from the number
}
if (original === reversedNum) {
    console.log(`${original} is a palindrome number.`);
}
else {
    console.log(`${original} is not a palindrome number.`);
}
