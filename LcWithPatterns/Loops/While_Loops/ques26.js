// Find the hcf of the given two numbers

let a = 12
let b = 18

let hcf = 1

let i = 1
while (i <= a && i <= b) {
    if (a % i === 0 && b % i === 0) {
        hcf = i
    }
    i++
}
