def reverseString(s: str) -> str:
    stack: list[str] = []

    for char in s:
        stack.append(char)

    result: str = ""
    while len(stack) > 0:
        result += stack.pop()
    return result

print(reverseString("hello"))
