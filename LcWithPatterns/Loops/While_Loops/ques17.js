// Checking if the number is prime
let num = 23;
let isPrime = true;
let i = 2;

while (i <= Math.sqrt(num)) {
  if (num % i === 0) {
    isPrime = false;
    break;
  }
  i++;
}

if (isPrime) {
  console.log(num + " is a prime number.");
} else {
  console.log(num + " is not a prime number.");
}
