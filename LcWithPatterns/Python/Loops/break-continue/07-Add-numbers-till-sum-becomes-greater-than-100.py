sum_val: int = 0

for i in range(1, 101):
    sum_val = sum_val + i
    if sum_val > 100:
        break
    print(i)
