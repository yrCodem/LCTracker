matrix: list[list[int]] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

rows: int = len(matrix)
cols: int = len(matrix[0])

print("Matrix:")

for i in range(rows):
    row: str = ""

    for j in range(cols):
        row += str(matrix[i][j]) + " "

    print(row)

print("\nRow Sums:")

for i in range(rows):
    total_sum: int = 0

    for j in range(cols):
        total_sum += matrix[i][j]

    print(f"Row {i + 1} Sum = {total_sum}")

print("\nColumn Sums:")

for j in range(cols):
    total_sum: int = 0

    for i in range(rows):
        total_sum += matrix[i][j]

    print(f"Column {j + 1} Sum = {total_sum}")
