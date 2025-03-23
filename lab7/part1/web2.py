#1======================================================
if __name__ == '__main__':
    print("Hello, World!")
#2======================================================

if __name__ == '__main__':
    n = int(input().strip())
    if n % 2 == 1:print('Weird')
    elif n % 2 == 0 and n >= 2 and n <= 5:print('Not Weird')
    elif n % 2 == 0 and n >= 6 and n <= 20:print('Weird')
    else:
        if n % 2 == 0 and n > 20 : print('Not Weird')

#3======================================================

if __name__ == '__main__':
    a = int(input())
    b = int(input())
    for i in range(0,3):
        if i == 0 : print(a+b)
        elif i == 1:print(a-b)
        else:print(a*b)
#4======================================================

if __name__ == '__main__':
    a = int(input())
    b = int(input())
    print(a//b)
    print(a/b)
#5======================================================


if __name__ == '__main__':
    n = int(input())
    for i in range(0,n):
        print(pow(i,2))

#6======================================================

def is_leap(year):
    leap = False

    # Write your logic here
    if (year % 400 == 0 or year % 4 == 0 and year % 100 != 0): leap = True

    return leap


year = int(input())
print(is_leap(year))

#7======================================================

if __name__ == '__main__':
    n = int(input())
    arr = []
    for i in range(1,n+1):arr.append(str(i))
    print(''.join(arr))

#8======================================================

if __name__ == '__main__':
    x = int(input())
    y = int(input())
    z = int(input())
    n = int(input())

    result = []
    for i in range(x + 1):
        for j in range(y + 1):
            for k in range(z + 1):
                if i + j + k != n: result.append([i, j, k])
    print(result)

#9======================================================

if __name__ == '__main__':
    n = int(input())
arr = list(map(int, input().split()))
max_value = max(arr)

new_arr = [x for x in arr if x != max_value]
print(max(new_arr))

#10======================================================
if __name__ == '__main__':
    students = []
    n = int(input())
    for _ in range(n):
        name = input()
        score = float(input())
        students.append([name, score])
    scores = sorted(set(score for _, score in students))
    second_lowest_score = scores[1]
    second_lowest_students = sorted([name for name, score in students if score == second_lowest_score])
    for student in second_lowest_students:
        print(student)
