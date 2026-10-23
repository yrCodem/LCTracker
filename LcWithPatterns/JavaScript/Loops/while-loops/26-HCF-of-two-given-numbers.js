"use strict";
// FInd the HCF (Highest Common Factors) of GCD (Greatest COmmon Divisor) of the two given numbers
Object.defineProperty(exports, "__esModule", { value: true });
let a = 12;
let b = 18;
let HCF = 1;
let i = 1;
while (i <= a && i <= b) {
    if (a % i === 0 && b % i === 0) {
        HCF = i;
    }
    i++;
}
console.log(HCF);
