n: int = 12
i: int = 1
sum: int = 0

while i <= n:
    if n % i == 0:
        sum = sum + i
    i += 1

print(sum)
