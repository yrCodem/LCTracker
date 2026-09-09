n: int = 10
i: int = 1
sum: int = 0

while i <= n:
    if i % 2 == 0:
        sum = sum + i
    i += 1

print(f"The sum of all even numbers from 1 to {n} is: {sum}")
