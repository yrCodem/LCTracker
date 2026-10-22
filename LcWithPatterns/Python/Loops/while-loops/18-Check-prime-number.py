num: int = 29
isPrime: bool = True
i: int = 2

while i < num:
    if num % i == 0:
        isPrime = False
        break
    i += 1
