"use strict";
// Check whether the given numer is a perfect number or not
Object.defineProperty(exports, "__esModule", { value: true });
let n = 28; // You can change this number to check for any other number
let sum = 0;
let i = 1; // Initialize the divisor to 1
// Create loop till n-1 to find all the divisors of n
while (i < n) {
    if (n % i === 0) { // Check if i is a divisor of n
        sum = sum + i; // Add the divisor to sum
    }
    i++; // Increment the divisor
}
if (sum === n) {
    console.log(`${n} is a perfect number.`);
}
else {
    console.log(`${n} is not a perfect number.`);
}
