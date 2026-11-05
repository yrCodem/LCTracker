n: int = 5
sum_val: float = 0.0

for i in range(1, n + 1):
    sum_val += 1 / i

print("Sum of series:", f"{sum_val:.4f}")
