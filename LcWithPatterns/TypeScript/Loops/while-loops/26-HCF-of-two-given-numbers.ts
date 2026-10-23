// FInd the HCF (Highest Common Factors) of GCD (Greatest COmmon Divisor) of the two given numbers

export{}

let a: number = 12
let b: number = 18
let HCF: number = 1
let i: number = 1

while (i <= a && i <= b){
    if (a % i === 0 && b % i === 0){
        HCF = i
    }
    i++
}

console.log(HCF)