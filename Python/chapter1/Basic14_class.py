# calculator.py
# result = 0

# def add(num):
#     global result
#     result += num  
#     return result  

# print(add(3))
# print(add(4))


# print("="*50)
# # calculator_class.py
# class Calculator:
#     def __init__(self):
#         self.result = 0

#     def add(self, num):
#         self.result += num
#         return self.result
    
#     def sub(self, num):
#       self.result -= num
#       return self.result

# cal1 = Calculator()
# cal2 = Calculator()

# print("add 3 =",cal1.add(3))
# print("add 4 =",cal1.add(4))
# print("add 3 =",cal2.add(3))
# print("add 7 =",cal2.add(7))
# print("sub 3 =",cal1.sub(3))
# print("sub 7 =",cal2.sub(7))

# class Calculator:
#     def __init__(self):
#         self.result = 0

#     def add(self, num):
#         self.result += num
#         return self.result

class FourCal:
  def __init__(self,first, second):
    self.first = first
    self.second = second
  def setdata(self,first, second):
    self.first = first
    self.second = second
  def add(self):
    result = self.first + self.second
    return result  
  def mul(self):
    result = self.first * self.second
    return result
  def sub(self):
    result = self.first - self.second
    return result
  def div(self):
    result = self.first / self.second
    return result

# a = FourCal(4,2)
# b = FourCal(1,3)

# a.setdata(4,2)
# b.setdata(1,3)

# print("add = ",a.add())
# print("mul = ",a.mul())
# print("sub = ",a.sub())
# print("div = ",a.div())
# print(a.first)
# print(a.second)
# print(b.first)
# print(b.second)

class MoreFourCal(FourCal):
  def pow(self):
    result = self.first ** self.second
    return result

class SafeFourCal(FourCal):
  def div(self):
    if self.second == 0:  
      return 0
    else:
      return self.first / self.second

a=MoreFourCal(4,0)
print("add = ",a.add())
print("pow = ",a.pow())

a=SafeFourCal(4,0)
print("div = ",a.div())


print("="*50)

class Family:
  lastname = "Kim"

a = Family()
b = Family()
c = Family()

a.lastname("Junior")

print(a.lastname())