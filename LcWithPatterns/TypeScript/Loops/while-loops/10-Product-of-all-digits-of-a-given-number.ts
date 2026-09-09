// Find and print the prodduct of all digits of a given number using a while loop in TypeScript

export {}

let num: number = 1234567; // You can change this number to find the product of digits of any other number
let product: number = 1; // Start with 1 as the product of digits starts from 1

while (num > 0){
    let digit: number = num % 10; // Get the last digit of the number
    product = product * digit; // Old product * current digit
    num = Math.floor(num / 10); // Remove the last digit from the number
}
console.log(`The product of all digits of ${num} is: ${product}`);