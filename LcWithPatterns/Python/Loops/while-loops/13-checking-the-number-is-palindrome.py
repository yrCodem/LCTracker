num: int = 12321
original: int = num
reversedNum: int = 0

while num > 0:
    digit: int = num % 10
    reversedNum = reversedNum * 10 + digit
    num = num // 10

if original == reversedNum:
    print(f"{original} is a palindrome number.")
else:
    print(f"{original} is not a palindrome number.")
