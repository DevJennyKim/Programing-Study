s1=set([1,2,3])
s1 = {1,2,3}

s2 = set('Hello')
print(s2) #=>{'l', 'e', 'H', 'o'}
# no duplication, Unordered

s1 = set([1, 2, 3, 4, 5, 6])
s2 = set([4, 5, 6, 7, 8, 9])

print(s1 & s2)
print(s1.intersection(s2))
print(s1-s2)
print(s2-s1)
print(s1.union(s2))
print(s1.difference(s2))
