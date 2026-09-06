// Finding the sum of all the digits of the number

let n = 234
let sum = 0
while (n>0){
    let digit = n%10
    sum = sum + digit
    n = Math.floor(n/10)
}
console.log(sum)
