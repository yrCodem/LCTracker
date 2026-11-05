"use strict";
// Input:  "hello"
// Output: "olleh"
// Logic
// Push every character into the stack.
// Then pop every character and append it to the result.
// Because of LIFO, the characters come out in reverse order.
function reverseString(s) {
    const stack = [];
    for (let char of s) {
        stack.push(char);
    }
    let result = "";
    while (stack.length > 0) {
        result += stack.pop();
    }
    return result;
}
console.log(reverseString("hello"));
