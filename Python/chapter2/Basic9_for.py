test_list = ['one', 'two', 'three']
for i in test_list:
    print(i)


a = [(1, 2), (3, 4), (5, 6)]
for (first, last) in a:
    print(first + last)


# marks1.py
marks = [90, 25, 67, 45, 80]   # List of students' exam scores

number = 0   # Number to assign to each student
for mark in marks:   # Assign 90, 25, 67, 45, 80 to mark sequentially
    number = number + 1
    if mark >= 60: 
        print("Student %d passed." % number)
    else: 
        print("Student %d failed." % number)


# marks2.py
marks = [90, 25, 67, 45, 80]

number = 0 
for mark in marks: 
    number = number + 1 
    if mark < 60:
        continue 
    print("Congratulations student %d. You passed." % number)


add = 0
for i in range(1, 11):
    add = add + i

print(add)


for i in range(2, 10):
    for j in range(1, 10):
        print(i * j, end=" ")
    print('')


# list comprehension



# a = [1, 2, 3, 4]
# result = []
# for num in a:
#     result.append(num * 3)

# print(result)
# =
a = [1,2,3,4]
result = [num * 3 for num in a]
print(result)

