// Sum of Fibonacci series up to n terms using a while loop in TypeScript

export {}

let num: number = 7
let a: number = 0
let b: number = 1
let counter: number = 1

let sum: number = 0

while (counter <= num){
    sum = sum + a
    let nextNumber: number = a + b
    a = b
    b = nextNumber
    counter++
}
console.log(sum)