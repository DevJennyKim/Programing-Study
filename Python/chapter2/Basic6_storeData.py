a=1
b=1
print(a is b)

a = [1, 2, 3]
b = a[:]
a[1] = 4
print(a)

a = b = 'python'
print(a)
print(b)
a = 3
b = 5
a, b = b, a
print(a)
print(b)