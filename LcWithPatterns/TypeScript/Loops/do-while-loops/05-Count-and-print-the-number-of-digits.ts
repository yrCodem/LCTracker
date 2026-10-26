// Count and print the number of digits in the given number. 

export{}

let num: number = 4567476878
let count: number = 0

do{
    count++
    num = Math.floor(num / 10)

} while (num > 0)

console.log(`The number of digits in ${num} is: ${count}`);