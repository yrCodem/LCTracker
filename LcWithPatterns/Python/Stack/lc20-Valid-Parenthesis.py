def isValid(s: str) -> bool:
    stack: list[str] = []
    pairs: dict[str, str] = {
        ")": "(",
        "]": "[",
        "}": "{"
    }

    for char in s:
        if char in "( {[":
            # Wait, let's keep exact condition: char === "(" || char === "{" || char === "["
            pass

        if char == "(" or char == "{" or char == "[":
            stack.append(char)
        else:
            if len(stack) == 0:
                return False

            top = stack.pop()
            if top != pairs[char]:
                return False

    return len(stack) == 0
