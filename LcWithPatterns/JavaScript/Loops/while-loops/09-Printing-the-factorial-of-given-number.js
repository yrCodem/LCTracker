"use strict";
// Calculate and print the factorial of a given number using a while loop in TypeScript
Object.defineProperty(exports, "__esModule", { value: true });
let n = 50; // You can change this number to calculate the factorial of any other number
let i = 1;
let factorial = 1; // Start with 1 as the factorial of 0 is 1
while (i <= n) { // Keep going until i becomes greater than n
    factorial = factorial * i; // Old factorial * current number i
    i++;
}
console.log(`The factorial of ${n} is: ${factorial}`);
