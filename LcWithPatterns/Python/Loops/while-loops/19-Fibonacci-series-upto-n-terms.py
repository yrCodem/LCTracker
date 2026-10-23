n: int = 7
a: int = 0
b: int = 1
count: int = 1

while count <= n:
    print(a)
    nextTerm: int = a + b
    a = b
    b = nextTerm
    count += 1
