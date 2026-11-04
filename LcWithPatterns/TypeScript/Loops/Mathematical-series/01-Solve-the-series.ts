// Calculate and print the value of the series
// 1² + 2² + 3² + … + n².

export {};

let n: number = 5;
let sum: number = 0;

for (let i = 1; i <= n; i++) {
    sum += i * i;
}

console.log("Sum of series:", sum);