// Print the sum of first n natural numbers

export{}

let n: number = 10;
let i: number = 1
let sum : number = 0;  // total starts from 0 as no number is added yet

while (i <= n){    // Keep going until i becomes greater than n
    sum = sum + 1  // Old sum + current number i
    i++
}