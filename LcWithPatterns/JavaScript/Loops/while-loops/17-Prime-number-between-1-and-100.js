"use strict";
// Printing all the prime numbers between 1 and 100 using a while loop in TypeScript
Object.defineProperty(exports, "__esModule", { value: true });
let n = 2; // Starting from the first prime number
while (n <= 100) { // Loop through numbers from 2 to 100
    let isPrime = true;
    let i = 2; // Initialize the divisor to 2
    while (i < n) {
        if (n % i === 0) { // Check if n is divisible by i
            isPrime = false;
        }
        i++; // Increment the divisor
    }
    if (isPrime) {
        console.log(n);
    }
    n++; // Increment the number to check for the next prime
}
