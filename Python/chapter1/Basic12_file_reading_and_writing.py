# newfile.py
# f = open("newfile.txt", 'w')
# f.close()

# r: Read mode – Used when you want to read the contents of a file.
# w: Write mode – Used when you want to write to a file.
# a: Append mode – Used when you want to add new content to the end of a file.


# write_data.py
# f = open("newfile2.txt", 'w', encoding="UTF-8")
# for i in range(1, 11):
#     data = "%d line.\n" % i
#     f.write(data)
# f.close()


# readline_test.py
f = open("newfile2.txt", 'r')
line = f.readline()
print(line)
f.close()

# readline_all.py
f = open("newfile2.txt", 'r')
while True:
    line = f.readline()
    if not line: break
    print(line)
f.close()