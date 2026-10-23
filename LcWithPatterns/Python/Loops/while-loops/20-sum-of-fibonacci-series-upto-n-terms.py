num: int = 7
a: int = 0
b: int = 1
counter: int = 1

sum: int = 0

while counter <= num:
    sum = sum + a
    next_number: int = a + b
    a = b
    b = next_number
    counter += 1

print(sum)
