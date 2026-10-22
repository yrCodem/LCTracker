"use strict";
// Check whether the number is prime or not using a while loop in TypeScript
Object.defineProperty(exports, "__esModule", { value: true });
let num = 29;
let isPrime = true;
let i = 2; // Initialize the divisor to 2
while (i < num) {
    if (num % i === 0) {
        isPrime = false;
        break; // Exit the loop if a divisor is found
    }
    i++;
}
