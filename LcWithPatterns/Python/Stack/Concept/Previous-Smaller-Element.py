from typing import List

def previousSmallerElement(arr: List[int]) -> List[int]:
    n = len(arr)
    stack: List[int] = []
    result: List[int] = [-1] * n

    for i in range(n):
        while (
            len(stack) > 0 and
            stack[-1] >= arr[i]
        ):
            stack.pop()

        if len(stack) > 0:
            result[i] = stack[-1]

        stack.append(arr[i])

    return result
