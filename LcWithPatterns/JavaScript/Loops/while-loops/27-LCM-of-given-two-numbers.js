"use strict";
// Finding the LCM of the given two numbers
Object.defineProperty(exports, "__esModule", { value: true });
let a = 123;
let b = 94;
let LCM = Math.max(a, b);
while (true) {
    if (LCM % a === 0 && LCM % b === 0) {
        break;
    }
    LCM++;
}
console.log(LCM);
