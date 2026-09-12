"use strict";
// Checking whether a number is an Armstrong number or not
Object.defineProperty(exports, "__esModule", { value: true });
let n = 153; // You can change this number to check for any other number
let origional = n; // Store the original number
let temp = n; // Temporary variable to calculate the number of digits
let digits = 0; // Initialize the count of digits to 0
// Calculate the total number of digits in the number
while (temp > 0) {
    digits++;
    temp = Math.floor(temp / 10); // Remove the last digit from the number
}
let sum = 0; // Initialize sum to 0
while (n > 0) {
    let digit = n % 10; // Get the last digit
    sum = sum + Math.pow(digit, digits); // Add the digit raised to the power of total digits to sum
    n = Math.floor(n / 10); // Remove the last digit from the number
}
if (sum === origional) {
    console.log(`${origional} is an Armstrong number.`);
}
else {
    console.log(`${origional} is not an Armstrong number.`);
}
