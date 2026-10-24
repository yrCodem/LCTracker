"use strict";
// Keep taking numbers from the user until 0 is entered, then print the sum of all entered numbers
Object.defineProperty(exports, "__esModule", { value: true });
let num;
let sum = 0;
do {
    num = Number(prompt("Enter a number (0 to stop):"));
    sum += num;
} while (num !== 0);
console.log("Sum of all entered numbers:", sum);
