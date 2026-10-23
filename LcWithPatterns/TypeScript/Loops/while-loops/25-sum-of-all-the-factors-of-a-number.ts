// Find and print the sum of all the factors of a given number
export{}
let n: number = 12
let i: number = 1
let sum: number = 0

while (i <= n){
    if (n % i === 0){
       sum = sum + i
    //    console.log(sum)
    }
    i++
}

console.log(sum)