"use strict";
// Print the multiplication table of a given number using a while loop
Object.defineProperty(exports, "__esModule", { value: true });
let num = 5; // You can change this number to print the multiplication table of any other number
let i = 1;
while (i <= 10) {
    console.log(`${num} x ${i} = ${num * i}`);
    i++;
}
