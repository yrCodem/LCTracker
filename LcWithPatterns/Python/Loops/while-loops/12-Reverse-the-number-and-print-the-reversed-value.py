num: int = 1234567
reversedNum: int = 0

while num > 0:
    digit: int = num % 10
    reversedNum = reversedNum * 10 + digit
    num = num // 10

print(f"The reversed value is: {reversedNum}")
