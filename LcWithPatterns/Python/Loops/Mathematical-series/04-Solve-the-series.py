n: int = 5
series: str = ""

for i in range(n + 1):
    series += str(2 ** i)

    if i < n:
        series += " + "

print(series)
