from typing import List

def largestRectangleArea(heights: List[int]) -> int:
    stack: List[int] = []
    n = len(heights)

    maxArea = 0

    for i in range(n + 1):
        currentHeight = 0 if i == n else heights[i]

        while (
            len(stack) > 0 and
            heights[stack[-1]] > currentHeight
        ):
            height = heights[stack.pop()]
            width = i if len(stack) == 0 else i - stack[-1] - 1

            area = height * width
            maxArea = max(maxArea, area)
        stack.append(i)
        
    return maxArea
