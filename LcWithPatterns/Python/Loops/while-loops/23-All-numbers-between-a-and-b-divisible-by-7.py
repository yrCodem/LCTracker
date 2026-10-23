a: int = 1
b: int = 100

i: int = a
while i <= b:
    if i % 7 == 0:
        print(i)
    i += 1
