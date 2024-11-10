t1 = ('a', 'b', ('ab', 'cd'))
print(type(t1))

t2 = 1,2,3
print(type(t2)) #==> tuple
print(t2[2])

t1= (1, 2, 'a', 'b')
print(t1[1:])

t2 = (3, 4)
t3 = t2 * 3
print(t3)

t1 = (1, 2, 'a', 'b')
t2 = (3, 4)
t3 = t1 + t2
print(t3)