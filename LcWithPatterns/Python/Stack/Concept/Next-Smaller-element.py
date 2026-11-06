from typing import List


def nextSmallerElement(arr: List[int]) -> List[int]:
    n: int = len(arr)
    stack: List[int] = []
    result: List[int] = [-1] * n

    for i in range(n - 1, -1, -1):
        while stack and stack[-1] >= arr[i]:
            stack.pop()

        if stack:
            result[i] = stack[-1]

        stack.append(arr[i])

    return result


print(nextSmallerElement([4, 5, 2, 10, 8]))
