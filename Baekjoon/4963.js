const input = [
    "1 1",
    "0",
    "2 2",
    "0 1",
    "1 0",
    "3 2",
    "1 1 1",
    "1 1 1",
    "5 4",
    "1 0 1 0 0",
    "1 0 0 0 0",
    "1 0 1 0 1",
    "1 0 0 1 0",
    "5 4",
    "1 1 1 0 1",
    "1 0 1 0 1",
    "1 0 1 0 1",
    "1 0 1 1 1",
    "5 5",
    "1 0 1 0 1",
    "0 0 0 0 0",
    "1 0 1 0 1",
    "0 0 0 0 0",
    "1 0 1 0 1",
    "0 0"
]

while(input.length > 1) {
    const info = input.shift().split(" ").map(e => parseInt(e));  // info = [w,h]
    let map = [];
    for(let line=0; line<info[1]; ++line) {
        map.push(input.shift().split(" ").map(e => parseInt(e)));
    }
    let counter = 0;
    for(let h=0; h<info[1]; ++h) {
        for(let w=0; w<info[0]; ++w) {
            if(map[h][w] == 1) {
                counter++;
                const queue = [`${h}-${w}`];
                while(queue.length > 0) {
                    let point = queue.shift().split("-").map(e => parseInt(e)); // point = [h,w]

                    //상
                    if(point[0]-1 >= 0 && map[point[0]-1][point[1]] == 1) {
                        map[point[0]-1][point[1]] = 2;
                        queue.push(`${point[0]-1}-${point[1]}`);
                    }
                    // 상우
                    if(point[1]-1 < info[0] && point[0]-1 >= 0 && map[point[0]-1][point[1]+1] == 1) {
                        map[point[0]-1][point[1]+1] = 2;
                        queue.push(`${point[0]-1}-${point[1]+1}`);
                    }
                    //우
                    if(point[1]+1 < info[0] && map[point[0]][point[1]+1] == 1) {
                        map[point[0]][point[1]+1] = 2;
                        queue.push(`${point[0]}-${point[1]+1}`);
                    }
                    // 우하
                    if(point[1]+1 < info[0] && point[0]+1 < info[1] && map[point[0]+1][point[1]+1] == 1) {
                        map[point[0]+1][point[1]+1] = 2;
                        queue.push(`${point[0]+1}-${point[1]+1}`);
                    }
                    //하
                    if(point[0]+1 < info[1] && map[point[0]+1][point[1]] == 1) {
                        map[point[0]+1][point[1]] = 2;
                        queue.push(`${point[0]+1}-${point[1]}`);
                    }
                    // 하좌
                    if(point[0]+1 < info[1] && point[1]+1 >= 0 && map[point[0]+1][point[1]-1] == 1) {
                        map[point[0]+1][point[1]-1] = 2;
                        queue.push(`${point[0]+1}-${point[1]-1}`);
                    }
                    //좌
                    if(point[1]-1 >= 0 && map[point[0]][point[1]-1] == 1) {
                        map[point[0]][point[1]-1] = 2;
                        queue.push(`${point[0]}-${point[1]-1}`);
                    }
                    // 좌상
                    if(point[1]-1 >= 0 && point[0]-1 >= 0  && map[point[0]-1][point[1]-1] == 1) {
                        map[point[0]-1][point[1]-1] = 2;
                        queue.push(`${point[0]-1}-${point[1]-1}`);
                    }
                }
            }
        }
    }
    console.log(counter);
}