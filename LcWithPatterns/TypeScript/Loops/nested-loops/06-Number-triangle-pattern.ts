// Generate and print the number triangle pattern 

export {};

let n: number = 5;

for (let i: number = 1; i <= n; i++) {

    let pattern: string = "";

    for (let j: number = 1; j <= i; j++) {

        pattern += j;

    }

    console.log(pattern);
}
