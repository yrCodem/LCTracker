// Write all the factors of a given number in typescript

export{}

let n: number = 12
let i: number = 1

while (i <= n){
    if (n % i === 0){
        console.log(i)
    }
    i++
}