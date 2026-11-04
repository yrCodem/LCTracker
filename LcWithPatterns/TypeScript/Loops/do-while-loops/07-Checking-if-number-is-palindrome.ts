// Checking whether the given number is Palindrome or not
export{}

let num: number = 12321
let original: number = num
let reversedNum: number = 0

do{
    let digit: number = num % 10
    reversedNum = reversedNum * 10 + digit
    num = Math.floor(num / 10)
}while ( num > 0 )

if (original === reversedNum){
    console.log(`The given number ${original} is a Palindrome number`)
}  else{
    console.log(`The given number ${original} is not a Palindrome number`)
}