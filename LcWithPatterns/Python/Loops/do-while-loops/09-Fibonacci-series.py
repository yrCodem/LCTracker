n: int = 10
a: int = 0
b: int = 1
count: int = 1

while True:
    print(a)
    nextNum: int = a + b
    a = b
    b = nextNum
    count += 1
    if count > n:
        break

print(f"The Fibonacci series of number {n} is {a}")
