n: int = 5

for i in range(1, n + 1):
    pattern: str = ""
    for j in range(1, i + 1):
        pattern += str(j)
    print(pattern)
