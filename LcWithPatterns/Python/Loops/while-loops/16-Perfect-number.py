n: int = 28
sum_val: int = 0
i: int = 1

while i < n:
    if n % i == 0:
        sum_val = sum_val + i
    i += 1

if sum_val == n:
    print(f"{n} is a perfect number.")
else:
    print(f"{n} is not a perfect number.")
