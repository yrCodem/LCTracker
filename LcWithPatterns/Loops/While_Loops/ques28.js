// Find the smallest digit of the given number

let num = 12345
let smallestDigit = num % 10

while (num > 0) {
    let digit = num % 10
    if (digit < smallestDigit) {
        smallestDigit = digit
    }
    num = Math.floor(num / 10)
}