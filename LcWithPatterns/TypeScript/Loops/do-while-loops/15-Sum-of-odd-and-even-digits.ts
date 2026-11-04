// Calculate and print the sum of Even and Odd digits seperately

export{}

let num: number = 75834
let even: number = 0
let odd: number = 0
let digit: number

do {
    digit = num % 10

    if (digit % 2 === 0) {
        even += digit
    } else {
        odd += digit
    }

    num = Math.floor(num / 10)

} while (num > 0)

console.log(`Sum of even digits: ${even}`)
console.log(`Sum of odd digits: ${odd}`)
