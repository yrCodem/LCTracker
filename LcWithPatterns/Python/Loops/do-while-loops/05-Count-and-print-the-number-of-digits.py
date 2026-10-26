num: int = 4567476878
original_num: int = num
count: int = 0

while True:
    count += 1
    num = num // 10
    if num <= 0:
        break

print(f"The number of digits in {original_num} is: {count}")
