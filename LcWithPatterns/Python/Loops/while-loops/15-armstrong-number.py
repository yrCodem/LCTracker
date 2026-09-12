n: int = 153
origional: int = n

temp: int = n
digits: int = 0

while temp > 0:
    digits += 1
    temp = temp // 10

sum_val: int = 0
current_n: int = n
while current_n > 0:
    digit: int = current_n % 10
    sum_val = sum_val + (digit ** digits)
    current_n = current_n // 10

if sum_val == origional:
    print(f"{origional} is an Armstrong number.")
else:
    print(f"{origional} is not an Armstrong number.")
