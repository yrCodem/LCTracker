// Print numbers from 1 to 100, and stop the loop as soon as a number divisible by 17 is encountered
export{};
let n: number = 100
for (let i: number = 1; i <= n; i++){
    if (i % 17 === 0){
        continue
    }
    console.log(i)
}