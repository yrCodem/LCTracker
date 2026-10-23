a: int = 12
b: int = 18
HCF: int = 1
i: int = 1

while i <= a and i <= b:
    if a % i == 0 and b % i == 0:
        HCF = i
    i += 1

print(HCF)
