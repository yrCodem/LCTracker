// Printing the factorial of a given number using do-while loop
export{}

let n: number = 50
let i: number = 1
let factorial: number = 1

do{
    factorial = factorial * i
    i++
} while (i <= n)

console.log(`The factorial of the number ${n} is ${factorial}`)