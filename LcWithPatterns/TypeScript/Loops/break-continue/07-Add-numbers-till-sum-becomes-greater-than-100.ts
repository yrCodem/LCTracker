// Continuously add numbers in a loop and stop the loop when the sum becomes greater than 100
export{};

let sum: number = 0

for (let i: number = 1; i <= 100; i++){
    sum = sum + i
    if(sum > 100)
        break
    console.log(i);
}