"use strict";
// 84. Largest Rectangle in Histogram
// Given an array of integers heights representing the histogram's bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram.
// Example 1:
// Input: heights = [2,1,5,6,2,3]
// Output: 10
// Explanation: The above is a histogram where width of each bar is 1.
// The largest rectangle is shown in the red area, which has an area = 10 units.
function largestRectangleArea(heights) {
    const stack = [];
    const n = heights.length;
    let maxArea = 0;
    for (let i = 0; i <= n; i++) {
        const currentHeight = i === n ? 0 : heights[i];
        while (stack.length > 0 &&
            heights[stack[stack.length - 1]] > currentHeight) {
            const height = heights[stack.pop()];
            const width = stack.length === 0
                ? i
                : i - stack[stack.length - 1] - 1;
            const area = height * width;
            maxArea = Math.max(maxArea, area);
        }
        stack.push(i);
    }
    return maxArea;
}
;
