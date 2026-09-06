// Check whether the given number is a palindrome.

let n = 15861
let reversed = 0
let original = n
while (n > 0) {
    let digit = n % 10
    reversed = reversed * 10 + digit
    n = Math.floor(n / 10)
}
if (original === reversed) {
    console.log("Palindrome")
} else {
    console.log("Not Palindrome")
}
