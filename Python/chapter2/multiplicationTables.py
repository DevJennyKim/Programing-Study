
# Function name: gugu
# Input value: 2
# Output value: Multiplication table of 2 (2, 4, 6, 8, …, 18)
# How to store the result: As a list, since it’s a sequence

def gugu(n):
  result = []
  # result.append(n*1)
  # result.append(n*2)
  # result.append(n*3)
  # result.append(n*4)
  # result.append(n*5)
  # result.append(n*6)
  # result.append(n*7)
  # result.append(n*8)
  # result.append(n*9)
  # return result

  i = 1
  while i < 10:
    result.append(n * i)
    i = i + 1
  return result

print(gugu(2))