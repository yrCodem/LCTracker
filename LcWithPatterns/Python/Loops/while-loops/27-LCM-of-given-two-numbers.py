import math

a: int = 123
b: int = 94
LCM: int = max(a, b)

while True:
    if LCM % a == 0 and LCM % b == 0:
        break
    LCM += 1

print(LCM)
