// FInd the largest digit in the given number

export{}

let n: number = 358757
let largest: number = n % 10

while (n > 0){
    let digit: number = n % 10
    if (digit > largest){
        largest = digit
    }
    n = Math.floor(n / 10)
}

console.log(largest)