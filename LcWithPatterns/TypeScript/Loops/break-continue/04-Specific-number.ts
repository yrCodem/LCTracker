// Search for specific number in a group of inputs, and when that number is found, terminate the loop
export{};

let n: number[] = [10, 20, 30, 40, 50]
let target: number = 30
let found: boolean = false

for (let i = 1; i <= n.length; i++){
    if (n[i] === target){
        found = true
        console.log(`The number ${target} is found at the index ${i}`);
        break
    }
}