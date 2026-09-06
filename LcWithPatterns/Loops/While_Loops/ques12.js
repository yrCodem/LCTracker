// Reverse the given number and print the reversed value.

let n = 15869
let reversed = 0
while (n > 0) {
    let digit = n % 10
    reversed = reversed * 10 + digit
    n = Math.floor(n / 10)
}
console.log(reversed)
