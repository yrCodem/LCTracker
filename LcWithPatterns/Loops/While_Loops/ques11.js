// Count and print the total number of digits in a given number.

let n = 15869
let count = 0
while (n > 0) {
    count++
    n = Math.floor(n / 10)
}
console.log(count)
