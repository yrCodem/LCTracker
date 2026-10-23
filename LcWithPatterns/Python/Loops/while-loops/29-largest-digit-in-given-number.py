n: int = 358757
largest: int = n % 10

while n > 0:
    digit: int = n % 10
    if digit > largest:
        largest = digit
    n = n // 10

print(largest)
