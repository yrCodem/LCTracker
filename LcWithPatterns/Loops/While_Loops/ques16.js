// Check whether the given number is a perfect number or not!
let num = 28;
let sum = 0;
let i = 1;
while (i < num) {
  if (num % i === 0) {
    sum += i;
  }
  i++;
}
if (sum === num) {
  console.log(num + " is a perfect number.");
} else {
  console.log(num + " is not a perfect number.");
}
