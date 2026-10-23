// Print all the numbers between a and b that are divisible by 7 using a while loop in TypeScript

export{}

let a: number = 1
let b: number = 100

let i: number = a
while (i <= b){
    if(i % 7 === 0){
        console.log(i)
    }
    i++
}
