// Find the lcm of the given two numbers

let a = 12
let b = 18

let lcm = Math.max(a, b)

while (true) {
    if (lcm % a === 0 && lcm % b === 0) {
        break
    }
    lcm++
}
