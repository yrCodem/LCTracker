num: int = 578384
reversedNum: int = 0

while True:
    digit: int = num % 10
    reversedNum = reversedNum * 10 + digit
    num = num // 10
    if not (num > 0):
        break

print(f"The reversed digits are: {reversedNum}")
