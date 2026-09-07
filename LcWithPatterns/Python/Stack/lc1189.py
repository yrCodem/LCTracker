def maxNumberOfBalloons(text: str) -> int:
    counts = {'b': 0, 'a': 0, 'l': 0, 'o': 0, 'n': 0}

    for char in text:
        if char in counts:
            counts[char] += 1

    counts['l'] = counts['l'] // 2
    counts['o'] = counts['o'] // 2

    return min(counts['b'], counts['a'], counts['l'], counts['o'], counts['n'])
