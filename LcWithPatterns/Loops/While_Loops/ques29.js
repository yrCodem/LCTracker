// Findign the largerst digit in the given number

let n = 52934
let largestDigit = n % 10

while (n > 0) {
    let digit = n % 10
    if (digit > largestDigit) {
        largestDigit = digit
    }
    n = Math.floor(n / 10)
}

console.log("The largest digit is: " + largestDigit)