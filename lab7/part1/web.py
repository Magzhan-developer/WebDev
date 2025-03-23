import math

#=======================================================

#Ввод-вывод, оператор присваивания

#Task-A
"""
a = int(input('Первое число:'))
b = int(input('Второе число:'))
print(math.sqrt(pow(float(a),2) + pow(float(b),2)))
"""

#Task-B
"""
a = int(input('Введите число:'))
print(f'The next number for the number {a} is {a+1}')
print(f'The previous number for the number {a} is {a-1}')
"""

#Task-C
"""
a = int(input('введите количество школьников:'))
b = int(input('введите количество яблок:'))
print(int(b/a))
"""

#Task-D
"""
a = int(input('введите количество школьников:'))
b = int(input('введите количество яблок:'))
print(b%a)
"""

#Task-E
"""
distance = 109
a = int(input('введите скорость:'))
b = int(input('введите количество часов:'))
def foundDist(speed,hour):
    if speed * hour < 0:
        return 108
    else : return abs(distance - a*b)
print(foundDist(a,b))
"""

#=======================================================

#Условный оператор

#Task-A
"""
a = int(input('Первое число:'))
b = int(input('Второе число:'))

print(a if a > b else b)
"""

#Task-B
"""
a = int(input('введите год:'))
print('YES' if ((a % 4 == 0 and a % 100 != 0) or a % 400 == 0) else 'NO')
"""

#Task-C
"""
correct = int(input())
student = int(input())  

if (correct == 1 and student == 1) or (correct != 1 and student != 1):
    print("YES")
else:
    print("NO")
"""

#Task-D
"""
x = int(input())

if x > 0:
    print(1)
elif x < 0:
    print(-1)
else:
    print(0)
"""

#Task-E
"""
a = int(input('Первое число:'))
b = int(input('Второе число:'))
print(1 if a > b else 0 if a == b else 2)
"""


#=======================================================
#Циклы

#Цикл for
#Task-A
"""
a = int(input('Первое число:'))
b = int(input('Второе число:'))
stt = []
for x in range(a,b+1):
    if x % 2 == 0:
        stt.append(str(x))

print(" ".join(stt))
"""

#Task-B
"""
a = int(input('Первое число:'))
b = int(input('Второе число:'))
c = int(input('Остаток:'))
d = int(input('Делитель:'))

arr = []

for x in range(a,b+1):
    if x % d == c:
        arr.append(str(x))
print(" ".join(arr))
"""

#Task-C
"""
a = int(input('Первое число:'))
b = int(input('Второе число:'))
start = math.ceil(math.sqrt(a))
end = math.floor(math.sqrt(b))
arr = []
for x in range(a,b+1):
    for j in range(start,end+1):
        if j * j == x:
            arr.append(str(x))
print(" ".join(arr))
"""

#Task-D
"""
a = int(input('Введите число:'))
sum = 0
for x in str(a):
    sum += int(x)
print(sum)
"""

#Task-E
"""
a = str(int(input('Введите число:')))
print(a[::-1])
"""

#Task-G
"""
a = int(input('Введите число:'))
def smallestDivider(num):
    for x in range(1,num+1):
        if num % x == 0 and x != 1:
            return x
    return num
print(smallestDivider(a))
"""

#Task-H
"""
a = int(input('Введите число:'))
def allDividers(num):
    arr = []
    for x in range(1,num+1):
        if num % x == 0:
            arr.append(str(x))
    return " ".join(arr)
print(allDividers(a))
"""

#Task-I
"""
a = int(input('Введите число:'))
def allDividersLength(num):
    arr = []
    for x in range(1,num+1):
        if num % x == 0:
            arr.append(str(x))
    return len(arr)
print(allDividersLength(a))
"""

#Task-J
"""
numStrs = str(input('Введите числа с пробелом:'))
numArr = numStrs.split(' ')
sum = 0
for x in numArr:
    sum += int(x)
print('Сумма:',sum)
"""

#Task-K
"""
numCount = int(input('количество чисел:'))
sum = 0
for x in range(0,numCount):
    number = int(input())
    sum += number
print(sum)
"""

#Task-L
"""
binary = str(input('в двоичной:'))
print(int(binary,2))
"""

#Task-M
"""
numCount = int(input('количество чисел:'))
nullsCount = 0
for x in range(0,numCount):
    number = int(input())
    if number == 0 :
        nullsCount+= 1
print(nullsCount)
"""


#Цикл while

#Task-A
"""
a = int(input('Введите число:'))
arr = []
i = 1
while i * i < a:
    arr.append(str(i * i))
    i += 1
print(" ".join(arr))
"""

#Task-B
"""
a = int(input('Введите число:'))
i = 1
while i <= a:
    if a % i == 0 and i != 1:
        print(i)
        break
    i += 1
"""

#Task-C
"""
a = int(input('Введите число:'))
i = 0
arr = []
while pow(2,i) < a:
    arr.append(str(pow(2,i)))
    i += 1
print(" ".join(arr))
"""

#Task-D
"""
a = int(input('Введите число:'))
print('YES' if (a & (a - 1)) == 0 else 'NO' )
"""

#Task-E
"""
a = int(input('Введите число:'))
i = 0
while pow(2,i) < a:
    i+= 1
print(i)
"""


#=======================================================
#Массивы

#Task-A
"""
n = int(input())
arr = str(input()).split(" ")
arr2 = []
for i in range(0,len(arr)):
    if i % 2 == 0:
        arr2.append(str(arr[i]))
print(" ".join(arr2))
"""

#Task-B
"""
n = int(input())
arr = str(input()).split(" ")
arr2 = []
for i in range(0,len(arr)):
    if int(arr[i]) % 2 == 0:
        arr2.append(str(arr[i]))
print(" ".join(arr2))
"""

#Task-C
"""
n = int(input())
arr = str(input()).split(" ")
count = 0
for i in range(0,len(arr)):
    if int(arr[i]) >= 0:
        count += 1
print(count)
"""

#Task-D
"""
n = int(input())
arr = str(input()).split(" ")
count = 0
for i in range(0,len(arr)):
    if i != 0 and int(arr[i]) > int(arr[i - 1]):
        count += 1
print(count)
"""

#Task-E
"""
n = int(input())
arr = str(input()).split(" ")
status = True
for i in range(0,len(arr)):
    if i <= len(arr) - 2:
        if int(arr[i]) > 0 and int(arr[i + 1]) > 0 or int(arr[i]) < 0 and int(arr[i + 1]) < 0 or int(arr[i]) == 0 and int(arr[i+1]) == 0:
            print('YES')
            status = False
            break
if status == True:
    print('NO')
"""

#Task-F
"""
n = int(input())
arr = str(input()).split(" ")
count = 0
for i in range(0,len(arr)):
    if i != 0 and i != len(arr) - 1:
        if arr[i] > arr[i - 1] and arr[i] > arr[i+1]:
            count += 1
print(count)
"""

#Task-G
"""
n = int(input())
arr = str(input()).split(" ")
print(" ".join(arr[::-1]))
"""

#=======================================================
#Функции

#Task-A
"""
def minimalElem(arr):
    return min(arr)

arr = list(map(int,str(input('Введите числа:')).split()))
print(minimalElem(arr))
"""

#Task-B
"""
def powerOf(a,b):
    return pow(a,b)

m,n = str(input()).split(' ')
print(powerOf(int(m),int(n)))
"""

#Task-C
"""
def xorRel(a,b):
    return a ^ b
a = int(input())
b = int(input())

print(xorRel(a,b))
"""