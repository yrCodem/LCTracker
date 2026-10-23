"use strict";
// Print the square of each number from 1 to n using a while loop in TypeScript
Object.defineProperty(exports, "__esModule", { value: true });
let n = 25;
let i = 1;
while (i <= n) {
    let square = i * i;
    console.log(`The Square of ${i} is ${square}`);
    i++;
}
