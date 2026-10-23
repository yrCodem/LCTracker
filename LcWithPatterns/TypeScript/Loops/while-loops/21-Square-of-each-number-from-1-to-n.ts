// Print the square of each number from 1 to n using a while loop in TypeScript

export {}

let n: number = 25
let i: number = 1

while (i <= n){
    let square: number = i * i
    console.log(`The Square of ${i} is ${square}`)
    i++
}