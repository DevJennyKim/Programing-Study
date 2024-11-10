a = 123
print(type(a))
# a = -178
a = 4.24E10
print(a)
print(type(a))

print('='*50)
str="Life is too short, You need python"
len(str)
# print(str[0])
# print(str[12])
# print(str[-1])
# #print(str[-35]) #error
# print(str[0:6:])
# print(str[::2])
print(str[::-1])
print(str[::-2])
print(str[19:-7])

print('='*50)
str2 = "I eat %d apples." % 3
print(str2)
number = 5
str3 = "I eat %d apples." % number
print(str3)

number = 10
day = "three"
str4="I ate %d apples. so I was sick for %s days." % (number, day)
print(str4)

a="%10s" % "hi"
print(a)

a="%10.4f" % 3.42134234
print(a)

a="I eat {0} apples".format(3)
print(a)


a="I ate {0} apples. so I was sick for {1} days.".format(number, day)
print(a)

a="{0:*^10}".format("hi")
print(a)

y = 3.42134234
a="{0:0.4f}".format(y)
print(a)

print('='*50)
name = 'Jenny'
age = 30
a= f'My name is {name}. I am {age}years old.'
print(a)

a= f'I will be {age *2}years old.'
print(a)

d = {'name':'Jenny', 'age':30}
a= f'My name is {d["name"]}. I am {d["age"]}years old.'
print(a)

y = 3.42134234
a= f'{y:0.4f}' 

print(a)

a = "Python is the best choice"
print(a.find('b'))
print(a.find('k'))

a= ", ".join('abcd')
print(a)


a = "Life is too short"
print(a.replace("Life", "Your leg"))
print(a.split())
b = "a:b:c:d"
print(b.split(':'))