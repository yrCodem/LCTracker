"use strict";
// Print a matrix and display the sum of the rows and columns
Object.defineProperty(exports, "__esModule", { value: true });
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
let rows = matrix.length;
let cols = matrix[0].length;
// Print the matrix
console.log("Matrix:");
for (let i = 0; i < rows; i++) {
    let row = "";
    for (let j = 0; j < cols; j++) {
        row += matrix[i][j] + " ";
    }
    console.log(row);
}
// Calculate sum of each row
console.log("\nRow Sums:");
for (let i = 0; i < rows; i++) {
    let sum = 0;
    for (let j = 0; j < cols; j++) {
        sum += matrix[i][j];
    }
    console.log(`Row ${i + 1} Sum = ${sum}`);
}
// Calculate sum of each column
console.log("\nColumn Sums:");
for (let j = 0; j < cols; j++) {
    let sum = 0;
    for (let i = 0; i < rows; i++) {
        sum += matrix[i][j];
    }
    console.log(`Column ${j + 1} Sum = ${sum}`);
}
