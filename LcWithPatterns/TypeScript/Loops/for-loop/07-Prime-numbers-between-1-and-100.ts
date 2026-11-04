// Write all the prime numbers between 1 and 100
export {};

for (let n: number = 2; n <= 100; n++) {

    let isPrime: boolean = true;

    for (let i: number = 2; i < n; i++) {

        if (n % i === 0) {
            isPrime = false;
            break;
        }

    }

    if (isPrime) {
        console.log(n);
    }
}
