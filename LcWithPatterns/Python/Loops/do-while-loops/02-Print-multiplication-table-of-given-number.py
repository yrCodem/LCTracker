n: int = 10
i: int = 1

while True:
    print(f"{n} x {i} = {n * i}")
    i += 1
    if i > n:
        break
