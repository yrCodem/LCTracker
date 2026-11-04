n: int = 132
count: int = 0
for i in range(1, n + 1):
    if n % i == 0:
        print(i)
        count += 1

print(f"The total number of factors of {n} are {count}")
