// Given an array, find the next greater element for every element.

// The next greater element is the first element to the right that is strictly greater than the current element.

// Example:
// Input:
// [4, 5, 2, 10, 8]

// Output:
// [5, 10, 10, -1, -1]

function nextGreaterElement(arr: number[]): number[]  {
    const n: number = arr.length
    const stack: number[] = []
    const result: number[] = new Array(n).fill(-1)

    for (let i = n - 1; i >= 0; i--){
        // REmove the elements that cannot be the answer
        while(
            stack.length > 0 && stack[stack.length - 1] <= arr[i]
        ){
            stack.pop()
        }
        // If Top is the next greater element
        if (stack.length > 0){
            result[i] = stack[stack.length - 1]
        }
    }
    return result
    console.log(result);
}