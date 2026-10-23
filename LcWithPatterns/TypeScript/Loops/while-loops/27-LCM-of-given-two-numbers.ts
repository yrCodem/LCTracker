// Finding the LCM of the given two numbers

export {}

let a: number = 123
let b: number = 94
let LCM: number = Math.max(a, b)

while (true){
    if (LCM % a === 0 && LCM % b === 0){
        break
    }
    LCM++
}
console.log(LCM)