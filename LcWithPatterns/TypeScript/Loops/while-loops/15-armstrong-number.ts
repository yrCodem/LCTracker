// Checking whether a number is an Armstrong number or not

// Armstrong Number -  sum of each digit raised to the power of total digits equal to the origional number

// Important Observation to solve
// 1. Total number of digits
// 2. each digit
// 3. Power calculation
// 4. Sum of each digit raised to the power of total digits

export {}

let n: number = 153; // You can change this number to check for any other number
let origional: number = n; // Store the original number

let temp: number = n; // Temporary variable to calculate the number of digits
let digits: number = 0; // Initialize the count of digits to 0

// Calculate the total number of digits in the number
while (temp > 0){
    digits++
    temp = Math.floor(temp / 10); // Remove the last digit from the number
}
let sum: number = 0; // Initialize sum to 0
while (n > 0){
    let digit: number = n % 10; // Get the last digit
    sum =  sum + Math.pow(digit, digits); // Add the digit raised to the power of total digits to sum
    n = Math.floor(n / 10); // Remove the last digit from the number
}
if (sum === origional) {
    console.log(`${origional} is an Armstrong number.`);
} else {
    console.log(`${origional} is not an Armstrong number.`);
}