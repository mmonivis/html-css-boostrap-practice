# O(1)
# Means the size of the data set is irrelevant, it will remain constant

# def first_element(the_list):
#     return the_list[0];

# a_list = [1,2,3,4,5,6,234,253,4564,56776,7889090,565345];
# b_list = [1];
# c_list = range(1,10000000000);

# def first_element(the_list):
#     element = the_list[0] - 1;
#     return element;

# a_list = [1,2,3,4,5,6,234,253,4564,56776,7889090,565345];
# b_list = [1];
# c_list = range(1,10000000000);

# 0(N)
# grows linearlly. ex: the number of steps increase proportionate to however
# many elements there are. this creates a straight, diagonal linear

# def loop_through_me(list):
#     for elem in the_list:
#         # do something
#         pass;

# O(N^2)
# Represents who's algorithm whose performance
# is directly proportional to the number of elements squared
# VERY COMMON. A loop inside a loop

# def oh_squared(the_list):
#     for elem in the_list:
#         for elem2 in the_list:
#             # do something
#             pass;

# for every new inside loop, you add a number to the big Oh
# 3 nested loops = O(N^3)
# 4 nested loops = O(N^4)

# O(2^N)
# this represents an algoritm that doubles with each new element
# you add one element, it takes twice as long

def fib(num):
    if(num <= 1):
        return num;
    return fib(num - 2) + fib(num - 1);

print fib(5)