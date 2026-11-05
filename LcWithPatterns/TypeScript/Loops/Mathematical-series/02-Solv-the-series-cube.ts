// Calculate and print the value of the series
// 1³ + 2³ + 3³ + … + n³
``
export {};

let n: number = 10;
let sum: number = 0;

for (let i = 1; i <= n; i++) {
    sum += i * i * i;
}

console.log("Sum of series:", sum);