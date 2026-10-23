// Print the cube of each number from 1 to n using a while loop in TypeScript

export {}

let n: number = 10
let i: number = 1

while (i <= n){
    let cube: number = i * i * i
    console.log(`The Cube of ${i} is ${cube}`)
    i++
}