// Print all the pythagorian triplets whose values are less than n

export {};

let n: number = 20;

for (let a: number = 1; a <= n; a++) {

    for (let b: number = a + 1; b <= n; b++) {

        for (let c: number = b + 1; c <= n; c++) {

            if (a * a + b * b === c * c) {
                console.log(`${a}, ${b}, ${c}`);
            }

        }
    }
}
