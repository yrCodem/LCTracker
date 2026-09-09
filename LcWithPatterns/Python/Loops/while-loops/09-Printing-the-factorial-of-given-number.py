n: int = 50
i: int = 1
factorial: int = 1

while i <= n:
    factorial = factorial * i
    i += 1

print(f"The factorial of {n} is: {factorial}")
