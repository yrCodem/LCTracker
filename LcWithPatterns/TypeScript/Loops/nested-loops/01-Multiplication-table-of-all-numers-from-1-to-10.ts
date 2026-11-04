// Printing the Multiplication table of allthe numbers from 1 to 10 using nested loops
export {};

for (let i: number = 1; i <= 10; i++) {

    console.log(`Multiplication Table of ${i}`);

    for (let j: number = 1; j <= 10; j++) {

        console.log(`${i} x ${j} = ${i * j}`);

    }

    console.log("-------------------");
}
