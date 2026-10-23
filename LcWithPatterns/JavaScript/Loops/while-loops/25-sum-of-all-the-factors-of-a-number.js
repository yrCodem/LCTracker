"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let n = 12;
let i = 1;
let sum = 0;
while (i <= n) {
    if (n % i === 0) {
        sum = sum + i;
        //    console.log(sum)
    }
    i++;
}
console.log(sum);
