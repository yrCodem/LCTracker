num: int = 12321
original: int = num
reversedNum: int = 0

while True:
    digit: int = num % 10
    reversedNum = reversedNum * 10 + digit
    num = num // 10
    if not (num > 0):
        break

if original == reversedNum:
    print(f"The given number {original} is a Palindrome number")
else:
    print(f"The given number {original} is not a Palindrome number")
