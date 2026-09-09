// Sum of all even from 1 to n using while loop

export {}

let n: number = 10;
let i: number = 1
let sum : number = 0;  // total starts from 0 as no number is added yet

while (i <= n){    // Keep going until i becomes greater than n
    if (i % 2 === 0){   // Check if the number is even
        sum = sum + i  // Old sum + current even number i
    }
    i++
}

console.log(`The sum of all even numbers from 1 to ${n} is: ${sum}`);