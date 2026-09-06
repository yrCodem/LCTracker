// Check whether the given number is Armstrong number or not

// Preserving the original state
let n = 153
let original = n

// Counting total digits
let temp = n
let digits = 0
while (temp > 0) {
    digits++
    temp = Math.floor(temp / 10)
}

// Armstrong number Logic
let sum = 0
while (n > 0){
    let digit = n % 10
    sum += Math.pow(digit, digits)
    n = Math.floor(n / 10)
}

if (sum === original) {
    console.log(original + " is an Armstrong number.");
} else {
    console.log(original + " is not an Armstrong number.");
}
