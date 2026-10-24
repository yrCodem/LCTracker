sum_val: int = 0

while True:
    num = int(input("Enter a number (0 to stop):"))
    sum_val += num
    if num == 0:
        break

print("Sum of all entered numbers:", sum_val)
