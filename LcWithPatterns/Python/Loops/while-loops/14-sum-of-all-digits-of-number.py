num: int = 7897493
sum: int = 0

while num > 0:
    digit: int = num % 10
    sum = sum + digit
    num = num // 10

print(f"The sum of all digits of the number is: {sum}")
