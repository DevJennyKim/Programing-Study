# closure.py
# class Mul:
#     def __init__(self, m):
#         self.m = m

#     def __call__(self, n):
#         return self.m * n

# if __name__ == "__main__":
#     mul3 = Mul(3)
#     mul5 = Mul(5)

def mul(m):
    def wrapper(n):
        return m * n
    return wrapper

if __name__ == "__main__":
    mul3 = mul(3)
    mul5 = mul(5)

    print(mul3(10))  # 30
    print(mul5(10))  # 50



import time

# def myfunc():
#     start = time.time()
#     print("The function is running.")
#     end = time.time()
#     print("Function execution time: %f seconds" % (end-start))

# myfunc()

# def elapsed(original_func):
#     def wrapper():
#         start = time.time()
#         result = original_func()
#         end = time.time()
#         print("Function execution time: %f seconds" % (end - start))
#         return result
#     return wrapper

# @elapsed
# def myfunc():
#     print("The function is running.")

# # decorated_myfunc = elapsed(myfunc)
# # decorated_myfunc()

# myfunc()


# decorator2.py

def elapsed(original_func): 
    def wrapper(*args, **kwargs): 
        start = time.time()
        result = original_func(*args, **kwargs) 
        end = time.time()
        print("Function execution time: %f sec" % (end - start)) 
        return result  
    return wrapper

@elapsed
def myfunc(msg):
    """ Decorator check function """
    print("Printing '%s'." % msg)

myfunc("You need python")