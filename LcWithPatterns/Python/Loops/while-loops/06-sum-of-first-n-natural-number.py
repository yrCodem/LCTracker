n: int = 10
i: int = 1
sum_val: int = 0  # total starts from 0 as no number is added yet

while i <= n:    # Keep going until i becomes greater than n
    sum_val = sum_val + 1  # Old sum + current number i
    i += 1
