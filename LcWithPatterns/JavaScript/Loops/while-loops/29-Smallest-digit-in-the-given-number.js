"use strict";
// Finding the smallest digit in the given number
Object.defineProperty(exports, "__esModule", { value: true });
let n = 65735;
let smallest = n % 10;
while (n > 0) {
    let digit = n % 10;
    if (digit < smallest) {
        smallest = digit;
    }
    n = Math.floor(n / 10);
}
console.log(smallest);
