

from collections import deque
start = [0] * 4
end = [0] * 2
N, M = map(int, raw_input().split())
maze = []
for i in range(N):
    maze.append([])
    for j, s in enumerate(raw_input()):
        maze[i].append(s)
        if s == '0':
            start[0], start[1] = i, j
        elif s == 'S':
            start[2], start[3] = i, j
        elif s =='E':
            end[0], end[1] = i, j
# box_x, box_y, per_x, per_y
reach = [[[[-1 for _ in range(M)] for _ in range(N)] for _ in range(M)] for _ in range(N)]
mazeQueue = deque()
mazeQueue.append(start)
direction = ((0, 1), (1, 0), (0, -1), (-1, 0))
reach[start[0]][start[1]][start[2]][start[3]] = 0
while len(mazeQueue):
    point = mazeQueue.popleft()
    if point[0]  == end[0] and point[1] == end[1]:
        print reach[point[0]][point[1]][point[2]][point[3]]
        break
    for i in range(4):
        # new coordinate for person
        xper = point[2]+direction[i][0]
        yper = point[3]+direction[i][1]
        # check validity
        if 0 <= xper < N and 0 <= yper < M and maze[xper][yper] != "#":
            if xper == point[0] and yper == point[1]:
                xbox, ybox = point[0] + direction[i][0], point[1] + direction[i][1]
                if xbox < 0 or xbox >= N or ybox < 0 or ybox >= M or maze[xbox][ybox] == '#':
                    continue
            else:
                xbox, ybox = point[0], point[1]
            if reach[xbox][ybox][xper][yper] < 0:
                mazeQueue.append([xbox, ybox, xper, yper])
                reach[xbox][ybox][xper][yper] = reach[point[0]][point[1]][point[2]][point[3]] + 1
if point[0]  != end[0] or point[1] != end[1]:
    print -1