n: int = 2
while n <= 100:
    is_prime: bool = True
    i: int = 2
    while i < n:
        if n % i == 0:
            is_prime = False
        i += 1
    if is_prime:
        print(n)
    n += 1
