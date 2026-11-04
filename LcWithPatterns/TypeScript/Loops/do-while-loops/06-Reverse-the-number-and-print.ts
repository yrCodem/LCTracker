// Reverse the number and print the given Reverse number

export {}

let num: number = 578384
let reversedNum: number = 0

do{
    let digit: number = num % 10
    reversedNum = reversedNum * 10 + digit
    num = Math.floor(num / 10)
} while (num > 0)

console.log(`The reversed digits are: ${reversedNum}`)