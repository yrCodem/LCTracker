// Finding the smallest digit in the given number

export {}

let n: number = 65735

let smallest: number = n % 10

while (n > 0){
    let digit: number = n % 10
    if (digit < smallest){
        smallest = digit
    }
    n = Math.floor(n / 10)
}

console.log(smallest)