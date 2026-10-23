"use strict";
// Print the cube of each number from 1 to n using a while loop in TypeScript
Object.defineProperty(exports, "__esModule", { value: true });
let n = 10;
let i = 1;
while (i <= n) {
    let cube = i * i * i;
    console.log(`The Cube of ${i} is ${cube}`);
    i++;
}
