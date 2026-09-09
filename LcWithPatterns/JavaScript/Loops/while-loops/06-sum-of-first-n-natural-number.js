"use strict";
// Print the sum of first n natural numbers
Object.defineProperty(exports, "__esModule", { value: true });
let n = 10;
let i = 1;
let sum = 0; // total starts from 0 as no number is added yet
while (i <= n) { // Keep going until i becomes greater than n
    sum = sum + 1; // Old sum + current number i
    i++;
}
