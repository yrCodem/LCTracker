// Keep taking numbers from the user until 0 is entered, then print the largest number among all inputs

let n: number
let largest: number = 0

do{
    n = Number(prompt("Enter the number to find the largest (0 to stop)"))
    if(n > largest){
        largest = n
    }
} while (n !== 0)

console.log("Largest of all entered numbers:", largest);