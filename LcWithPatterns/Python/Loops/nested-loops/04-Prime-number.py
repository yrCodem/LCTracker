n: int = 100

for i in range(2, n + 1):
    is_prime: bool = True
    for j in range(2, i):
        if i % j == 0:
            is_prime = False
            break

    if is_prime:
        print(i)
