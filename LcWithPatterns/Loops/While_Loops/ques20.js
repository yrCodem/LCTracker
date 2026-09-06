// Print the sum of fibonacci series upto n terms

let n = 10
let a = 0
let b = 1
let sum = 0
let i = 1
while (i <= n) {
    console.log(a)
    sum += a
    let next = a + b
    a = b
    b = next
    i++
}
console.log(sum)
