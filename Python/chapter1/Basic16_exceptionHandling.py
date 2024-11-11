try:
  f = open("non_existent_file.txt", 'r')
except FileNotFoundError:
  print("File not found.")
finally:
  print("Execution completed.")


try:
  a = [1,2]
  print(a[3])
  4/0
except ZeroDivisionError as e:
  print(e)
except IndexError as e:
  print(e)

try:
  age = int(input('Please enter your age: '))
except:
  print('Invalid input.')
else:
  if age <= 18:
    print('Minors are not allowed.')
  else:
    print('Welcome.')


try:
  f = open("non_existent_file.txt", 'r')
except FileNotFoundError:
  pass

# error_raise.py
class Bird:
  def fly(self):
    raise NotImplementedError
    
class Eagle(Bird):
  def fly(self):
    print("flying")

eagle = Eagle()
eagle.fly()


# error_make.py
class MyError(Exception):
  pass

def say_nick(nick):
  if nick == 'bird':
    raise MyError()
  print(nick)  