num: int = 75834
even: int = 0
odd: int = 0
digit: int

while True:
    digit = num % 10

    if digit % 2 == 0:
        even += digit
    else:
        odd += digit

    num = num // 10

    if num <= 0:
        break

print(f"Sum of even digits: {even}")
print(f"Sum of odd digits: {odd}")
