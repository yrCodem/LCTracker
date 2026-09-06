// Print all the numbers between a and b that are divisible by 7

let a = 10
let b = 1000

let i = a
while (i <= b){
    if ( i % 7 === 0){
        console.log(i)
    }
    i++
}
