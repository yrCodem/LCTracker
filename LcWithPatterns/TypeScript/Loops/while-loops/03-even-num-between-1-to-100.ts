// Printing all the even numbers between 1 to 100 using a while loop in TypeScript
export {};

let i: number = 1;
while(i <= 100){
    if (i % 2 === 0){  // Checks if the number when divided by 2 gives a remainder of 0, which means it is an even number
        console.log(i);
    }
    i++;
}