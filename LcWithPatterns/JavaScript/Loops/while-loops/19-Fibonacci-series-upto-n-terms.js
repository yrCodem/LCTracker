"use strict";
// Printing the fibonacci series up to n terms using a while loop in TypeScript
Object.defineProperty(exports, "__esModule", { value: true });
let n = 7; // Number of terms to print
let a = 0; // First term
let b = 1; // Second term
let count = 1; // Counter to keep track of the number of terms printed
while (count <= n) {
    console.log(a); // Print the current term
    let nextTerm = a + b; // Calculate the next term in the series
    a = b; // Update a to the next term
    b = nextTerm; // Update b to the next term
    count++; // Increment the counter
}
