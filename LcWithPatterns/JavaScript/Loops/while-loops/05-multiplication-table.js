"use strict";
// Print the multiplication table of a given number using a while loop
Object.defineProperty(exports, "__esModule", { value: true });
let num = 5;
let i = 1;
while (i <= 10) {
    console.log(`${num} x ${i} = ${num * i}`);
    i++;
}
