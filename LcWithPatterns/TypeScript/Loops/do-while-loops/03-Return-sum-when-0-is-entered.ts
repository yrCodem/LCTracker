// Keep taking numbers from the user until 0 is entered, then print the sum of all entered numbers

export{}


let num: number;
let sum: number = 0;

do {
    num = Number(prompt("Enter a number (0 to stop):"));
    sum += num;
} while (num !== 0);

console.log("Sum of all entered numbers:", sum);
