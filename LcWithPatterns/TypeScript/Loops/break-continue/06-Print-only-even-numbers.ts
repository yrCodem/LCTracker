// Skip all the odd numbers and print only the even numbers between 1 and 100
export{};

for (let i: number = 1; i <= 100; i++){
    if (i % 2 !== 0){
        continue
        // console.log(i);
    }
    console.log(i);
}