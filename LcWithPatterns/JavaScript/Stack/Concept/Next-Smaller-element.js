"use strict";
// Given an array, find the next greater element for every element.
Object.defineProperty(exports, "__esModule", { value: true });
function nextSmallerElement(arr) {
    const n = arr.length;
    const stack = [];
    const result = new Array(n).fill(-1);
    for (let i = n - 1; i >= 0; i--) {
        // Remove elements that cannot be the answer
        while (stack.length > 0 &&
            stack[stack.length - 1] >= arr[i]) {
            stack.pop();
        }
        // Find the next greater element
        if (stack.length > 0) {
            result[i] = stack[stack.length - 1];
        }
        // Push current element into stack
        stack.push(arr[i]);
    }
    return result;
}
console.log(nextSmallerElement([4, 5, 2, 10, 8]));
