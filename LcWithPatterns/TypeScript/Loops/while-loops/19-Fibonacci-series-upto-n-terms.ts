// Printing the fibonacci series up to n terms using a while loop in TypeScript

// Fibonacci series - A sequence of numbers where each number is the sum of the two preceding ones, usually starting with 0 and 1. For example, 0, 1, 1, 2, 3, 5, 8, 13, etc.

export {}

let n: number = 7 // Number of terms to print
let a: number = 0 // First term
let b: number = 1 // Second term
let count: number = 1 // Counter to keep track of the number of terms printed

while (count <= n) {
    console.log(a); // Print the current term
    let nextTerm: number = a + b; // Calculate the next term in the series
    a = b; // Update a to the next term
    b = nextTerm; // Update b to the next term
    count++; // Increment the counter
}