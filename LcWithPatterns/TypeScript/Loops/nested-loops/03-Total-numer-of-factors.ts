// For every number from 1 to n, count and print the total number of its factors

export{};

let n: number = 132
let count: number = 0
for (let i: number = 1; i <= n; i++){
    if (n % i === 0){
        console.log(i);
        count++
    }
}

console.log(`The total number of factors of ${n} are ${count}`);