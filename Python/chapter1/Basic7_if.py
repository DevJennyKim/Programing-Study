money = False
if money: 
  print('take a taxi')
else:
  print('walk')

money = 2000
if money >= 3000:
  print('take a taxi')
else:
  print('walk')

money = 2000
card = True
if money >= 3000 or card:
  print('take a taxi')
else:
  print('walk')

print(1 in [1, 2, 3])
print(1 not in [1, 2, 3])

print('p ' in 'python') #=>false as a space

pocket = ['paper', 'cellphone', 'money']
if 'money' in pocket:
  print("take a taxi")
else:
  print("walk")

  pocket = ['paper', 'cellphone', 'money']
if 'money' in pocket:
  pass #if you don't want to do anything
else:
  print("walk")
# =
pocket = ['paper', 'money', 'cellphone']
if 'money' in pocket: pass
else: print("카드를 꺼내라")


pocket = ['paper', 'cellphone']
card = True
if 'money' in pocket:
    print("take a taxi")
else:
  if card:
    print("take a taxi")
  else:
    print("walk")

pocket = ['paper', 'cellphone']
card = True
if 'money' in pocket:
  print("take a taxi")
elif card: 
  print("take a taxi")
else:
  print("walk")

score = 100
message = "success" if score >= 60 else "failure"

print(message)