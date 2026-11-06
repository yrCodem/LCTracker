def nextGreaterElement(arr: list[int]) -> list[int]:
    n: int = len(arr)
    stack: list[int] = []
    result: list[int] = [-1] * n

    for i in range(n - 1, -1, -1):
        while len(stack) > 0 and stack[-1] <= arr[i]:
            stack.pop()
        if len(stack) > 0:
            result[i] = stack[-1]
        stack.append(arr[i])
        
    return result
