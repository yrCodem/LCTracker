// Reverse the given number and print the reversed value using a while loop in TypeScript

export {}

let num: number = 1234567; // You can change this number to reverse any other number
let reversedNum: number = 0; // Start with 0 as the reversed number

while (num > 0){
    let digit: number = num % 10
    reversedNum = reversedNum * 10 + digit; // Old reversed number * 10 + current digit
    num = Math.floor(num / 10); // Remove the last digit from the number
}
console.log(`The reversed value is: ${reversedNum}`);