n: list[int] = [10, 20, 30, 40, 50]
target: int = 30
found: bool = False

for i in range(1, len(n) + 1):
    if n[i] == target:
        found = True
        print(f"The number {target} is found at the index {i}")
        break
