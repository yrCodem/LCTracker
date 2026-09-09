"use strict";
// Sum of all even from 1 to n using while loop
Object.defineProperty(exports, "__esModule", { value: true });
let n = 10;
let i = 1;
let sum = 0; // total starts from 0 as no number is added yet
while (i <= n) { // Keep going until i becomes greater than n
    if (i % 2 === 0) { // Check if the number is even
        sum = sum + i; // Old sum + current even number i
    }
    i++;
}
console.log(`The sum of all even numbers from 1 to ${n} is: ${sum}`);
