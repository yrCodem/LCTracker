n: int = 50
i: int = 1
factorial: int = 1

while True:
    factorial = factorial * i
    i += 1
    if not (i <= n):
        break

print(f"The factorial of the number {n} is {factorial}")
