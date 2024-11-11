# def function_name(parameter):
#     statement1
#     statement2


def add(a, b):
    return a+b

print(add(3, 4))


def add(a, b): 
  print("%d, %d의 합은 %d입니다." % (a, b, a+b))

a = add(1,2)
print(a)

def say(): 
  print('Hi')


a = say()
print(a)

def print_kwargs(**kwargs):
  print(kwargs)


print('='*50)
# vartest_return.py
a = 1 
def vartest(a): 
    a = a +1 
    return a

a = vartest(a) 
print(a)


add = lambda a, b: a+b
result = add(3, 4)
print(result)