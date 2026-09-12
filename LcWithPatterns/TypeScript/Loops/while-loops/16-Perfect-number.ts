// Check whether the given numer is a perfect number or not

// Perfect Number - A perfect number is a positive integer that is equal to the sum of its proper positive divisors, excluding the number itself. For example, 6 is a perfect number because its divisors are 1, 2, and 3, and their sum is 6 (1 + 2 + 3 = 6).

export {}

let n: number = 28; // You can change this number to check for any other number
let sum: number = 0
let i: number = 1; // Initialize the divisor to 1

// Create loop till n-1 to find all the divisors of n
while (i < n){
    if (n % i === 0){ // Check if i is a divisor of n
        sum = sum + i; // Add the divisor to sum
    }
    i++; // Increment the divisor
}
if (sum === n){
    console.log(`${n} is a perfect number.`);
} else {
    console.log(`${n} is not a perfect number.`);
}