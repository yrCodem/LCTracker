// Print the multiplication table of a given number using a while loop

export {}

let num: number = 5; // You can change this number to print the multiplication table of any other number
let i: number = 1

while (i <= 10) {
    console.log(`${num} x ${i} = ${num * i}`);
    i++;
}