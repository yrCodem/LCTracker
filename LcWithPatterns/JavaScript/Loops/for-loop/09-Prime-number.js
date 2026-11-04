"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let n = 2;
let isPrime = true;
if (n <= 1) {
    isPrime = false;
}
else {
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            isPrime = false;
            break;
        }
    }
}
if (isPrime) {
    console.log(`${n} is a Prime Number`);
}
else {
    console.log(`${n} is Not a Prime Number`);
}
