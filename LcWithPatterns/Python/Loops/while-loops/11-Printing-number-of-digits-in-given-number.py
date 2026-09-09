num: int = 123456789
original_num: int = num
count: int = 0

while num > 0:
    count += 1
    num = num // 10

print(f"The number of digits in {original_num} is: {count}")
