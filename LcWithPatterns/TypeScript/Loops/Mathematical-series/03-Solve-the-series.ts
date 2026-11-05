// Calculate and print the value of the series
// 1 + 1/2 + 1/3 + … + 1/n. 

export {};

let n: number = 5;
let sum: number = 0;

for (let i = 1; i <= n; i++) {
    sum += 1 / i;
}

console.log("Sum of series:", sum.toFixed(4));