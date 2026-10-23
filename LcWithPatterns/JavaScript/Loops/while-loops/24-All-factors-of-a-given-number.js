"use strict";
// Write all the factors of a given number in typescript
Object.defineProperty(exports, "__esModule", { value: true });
let n = 12;
let i = 1;
while (i <= n) {
    if (n % i === 0) {
        console.log(i);
    }
    i++;
}
