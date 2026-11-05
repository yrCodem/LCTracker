"use strict";
// Calculate and solve the series
//  1 + 2 + 4 + 8 + … + 2ⁿ. 
Object.defineProperty(exports, "__esModule", { value: true });
let n = 5;
let series = "";
for (let i = 0; i <= n; i++) {
    series += 2 ** i;
    if (i < n) {
        series += " + ";
    }
}
console.log(series);
