// Print all the prime numbers from 1 to n using the nested loop


export {};

let n: number = 100;

for (let i: number = 2; i <= n; i++) {

    let isPrime: boolean = true;

    for (let j: number = 2; j < i; j++) {

        if (i % j === 0) {
            isPrime = false;
            break;
        }

    }

    if (isPrime) {
        console.log(i);
    }
}
