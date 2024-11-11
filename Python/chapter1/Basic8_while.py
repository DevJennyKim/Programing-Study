treeHit = 0
while treeHit < 10:
  treeHit = treeHit +1
  print("You have hit the tree %d times." % treeHit)
  if treeHit == 10:
    print("The tree is falling.")


# prompt = """
# 1. Add
# 2. Del
# 3. List
# 4. Quit

# Enter number: """

# number = 0
# while number != 4:
#     print(prompt)
#     number = int(input())



coffee = 10
money = 300
while money:
    print("Received money, giving coffee.")
    coffee = coffee - 1
    print("Remaining coffee amount: %d cups." % coffee)
    if coffee == 0:
        print("Coffee is out of stock. Stopping sales.")
        break


# coffee.py
# coffee = 10
# while True:
#     money = int(input("Please insert money: "))
#     if money == 300:
#         print("Here is your coffee.")
#         coffee = coffee - 1
#     elif money > 300:
#         print("Returning %d in change and giving coffee." % (money - 300))
#         coffee = coffee - 1
#     else:
#         print("Returning your money. Not enough for coffee.")
#     print("Remaining coffee amount: %d cups." % coffee)
    
#     if coffee == 0:
#         print("Out of coffee. Stopping sales.")
#         break

print('='*50)
a = 0
while a < 10:
    a = a + 1
    if a % 2 == 0:
        continue
    print(a)
