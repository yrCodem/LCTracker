num: int = 1234567
original_num: int = num
product: int = 1

while num > 0:
    digit: int = num % 10
    product = product * digit
    num = num // 10

print(f"The product of all digits of {original_num} is: {product}")
