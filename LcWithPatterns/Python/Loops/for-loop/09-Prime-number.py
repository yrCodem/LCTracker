n: int = 2
isPrime: bool = True

if n <= 1:
    isPrime = False
else:
    for i in range(2, n):
        if n % i == 0:
            isPrime = False
            break

if isPrime:
    print(f"{n} is a Prime Number")
else:
    print(f"{n} is Not a Prime Number")
