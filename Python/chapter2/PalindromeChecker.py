def is_palindrome(s):
  """Check whether a string is a palindrome"""
  return s == s[::-1]

s = input("Enter a string to check if it is a palindrome: ")

if is_palindrome(s):
    print("The string is a palindrome.")
else:
    print("The string is not a palindrome.")
