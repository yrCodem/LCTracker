// Calculate and solve the series
//  1 + 2 + 4 + 8 + … + 2ⁿ. 

export {};

let n: number = 5;
let series: string = "";

for (let i = 0; i <= n; i++) {
    series += 2 ** i;

    if (i < n) {
        series += " + ";
    }
}

console.log(series);