// Printing all the odd numbers between 1 to 100 using a while loop in TypeScript
export {};

let i: number = 1

while (i < 100){
    if (i % 2 === 1){
        console.log(i);
    }
    i++;
}