n: int = 65735

smallest: int = n % 10

while n > 0:
    digit: int = n % 10
    if digit < smallest:
        smallest = digit
    n = n // 10

print(smallest)
