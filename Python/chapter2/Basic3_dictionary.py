# something like a JSON, Object

dic= {'name': 'pey', 'phone': '010-9999-1234', 'birth': '1118'}

a={1:'a'}
a[2]= "b"
a['name'] = 'pey'
a[3] = [1, 2, 3]
print(a)

del a[1],a['name']
print(a)


grade = {'pey': 10, 'julliet': 99}
print(grade['pey'])
dic = {'name':'pey', 'phone':'010-9999-1234', 'birth': '1118'}
print(dic['name'])
print(dic.keys())


print(dic.get('name'))
print('name' in dic)