// Finding the sum of all digits of a number using while loop in TypeScript

export {}

let num: number = 7897493; // You can change this number to find the sum of digits of any other number
let sum: number = 0; // Initialize sum to 0

while (num > 0){
    let digit: number = num % 10; // Get the last digit
    sum =  sum + digit; // Add the digit to sum
    num = Math.floor(num / 10); // Remove the last digit from the number
}
console.log(`The sum of all digits of the number is: ${sum}`);