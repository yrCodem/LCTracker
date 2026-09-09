"use strict";
// Printing the number of digits in a given number using a while loop in TypeScript
Object.defineProperty(exports, "__esModule", { value: true });
let num = 123456789; // You can change this number to find the number of digits in any other number
let count = 0; // Start with 0 as we haven't counted any digits yet
while (num > 0) {
    count++; // Increment the count for each digit
    num = Math.floor(num / 10); // Remove the last digit from the number
}
console.log(`The number of digits in ${num} is: ${count}`);
