"use strict";
// FInd the largest digit in the given number
Object.defineProperty(exports, "__esModule", { value: true });
let n = 358757;
let largest = n % 10;
while (n > 0) {
    let digit = n % 10;
    if (digit > largest) {
        largest = digit;
    }
    n = Math.floor(n / 10);
}
console.log(largest);
