// Printing all the prime numbers between 1 and 100 using a while loop in TypeScript

// Prime no - Has exactly two distinct positive divisors: 1 and itself. For example, 2, 3, 5, 7, 11, etc.

export {}

let n: number = 2 // Starting from the first prime number
while (n <= 100) { // Loop through numbers from 2 to 100
    let isPrime: boolean = true
    let i: number = 2 // Initialize the divisor to 2
    while (i < n){
        if (n % i === 0){ // Check if n is divisible by i
            isPrime = false;
    }
    i++;
    }
    if (isPrime) {
        console.log(n);
    }
    n++; // Increment the number to check for the next prime
}