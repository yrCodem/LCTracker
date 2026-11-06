from typing import List

def previousSmallerElement(arr: List[int]) -> List[int]:
    n = len(arr)
    stack: List[int] = []
    result = [-1] * n

    for i in range(n):
        while stack and stack[-1] >= arr[i]:
            stack.pop()

        if stack:
            result[i] = stack[-1]

        stack.append(arr[i])

    return result
