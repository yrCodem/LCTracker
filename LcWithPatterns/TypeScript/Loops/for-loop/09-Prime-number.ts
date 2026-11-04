// Checking whether the given number is prime or not
export {};

let n: number = 2;
let isPrime: boolean = true;

if (n <= 1) {
    isPrime = false;
} else {
    for (let i = 2; i < n; i++) {

        if (n % i === 0) {
            isPrime = false;
            break;
        }

    }
}

if (isPrime) {
    console.log(`${n} is a Prime Number`);
} else {
    console.log(`${n} is Not a Prime Number`);
}
