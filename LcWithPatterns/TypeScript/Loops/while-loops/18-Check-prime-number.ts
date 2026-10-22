// Check whether the number is prime or not using a while loop in TypeScript

// Prime no - Has exactly two distinct positive divisors: 1 and itself. For example, 2, 3, 5, 7, 11, etc.

export {}

let num: number = 29
let isPrime: boolean = true
let i: number = 2 // Initialize the divisor to 2

while (i < num){
    if (num % i === 0){
        isPrime = false;
        break; // Exit the loop if a divisor is found
    }
    i++;

}