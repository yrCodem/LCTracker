// Print the fibonacci series upto n terms

let n = 10

let a = 0
let b = 1

let i = 1
while (i <= n) {
    console.log(a)

    let next = a + b
    a = b
    b = next
    i++
}
