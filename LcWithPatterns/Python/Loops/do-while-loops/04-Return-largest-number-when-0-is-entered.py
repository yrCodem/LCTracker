largest: int = 0

while True:
    n = float(input("Enter the number to find the largest (0 to stop)"))
    if n > largest:
        largest = n
    if n == 0:
        break

print("Largest of all entered numbers:", largest)
