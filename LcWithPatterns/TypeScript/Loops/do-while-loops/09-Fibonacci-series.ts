// // Printing the fibonacci series up to n terms using a do-while loop in TypeScript

// Fibonacci series - A sequence of numbers where each number is the sum of the two preceding ones, usually starting with 0 and 1. For example, 0, 1, 1, 2, 3, 5, 8, 13, etc.

export{}

let n: number = 10
let a: number = 0
let b: number = 1
let count: number = 1

do{
    console.log(a)
    let nextNum: number = a + b
    a = b
    b = nextNum
    count++
} while (count <= n)

console.log(`The Fibonacci series of number ${n} is ${a}`)