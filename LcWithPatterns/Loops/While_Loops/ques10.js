// Find and print the product of all digits of a given number.

let n = 15869
let product = 1
while (n>0){
    let digit = n % 10
    product = product * digit
    n = Math.floor(n / 10)
}
console.log(product)
