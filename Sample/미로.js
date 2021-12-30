class Queue {
    constructor(init) {
        this.queue = [init];
        this.visited = [init];
    }
    dequeue() {
        return this.queue.shift();
    }
    inqueue(vectax) {
        if(this.visited.indexOf(vectax) != -1) return;
        this.visited.push(vectax);
        this.queue.push(vectax);
    }
    getQueue() {return this.queue};
}

/* const input = [
    "7 7",
"1011111",
"1110001",
"1000001",
"1000001",
"1000001",
"1000001",
"1111111"
]; */
/* const input = [
    "2 25",
    "1011101110111011101110111",
    "1110111011101110111011101"
] */
const input = [
    "4 6",
    "110110",
    "110110",
    "111111",
    "111101"
]

const map = input.shift().split(" ").map(e => parseInt(e));
const goal = `${map[0]-1}-${map[1]-1}`;

console.log("크기 : ", map)
console.log("목표 : ",goal);

// 미로 2차원 배열 
const array = input.map(line => {
    return line.split(""); 
});

console.log(array)
const Q = new Queue(`0-0`);
let loop = 1;
while(Q.getQueue().length != 0) {
    let size = Q.getQueue().length;
    console.log('현재 큐 상태 : ', Q.getQueue())
    for(let sizelooper = 0; sizelooper < size; ++sizelooper) {
        let findVectax = Q.dequeue().split("-").map(e => parseInt(e));
        console.log("현재 위치 : ", findVectax)
        //상
        if(findVectax[0]-1 > -1 && array[findVectax[0]-1][findVectax[1]] == "1") Q.inqueue(`${findVectax[0]-1}-${findVectax[1]}`);
        //하
        console.log(`${findVectax[0]}+1 < ${map[0]}`,findVectax[0]+1 < map[0]);
        if(findVectax[0]+1 < map[0] && array[findVectax[0]+1][findVectax[1]] == "1") Q.inqueue(`${findVectax[0]+1}-${findVectax[1]}`);
        //좌
        if(findVectax[1]-1 > -1 && array[findVectax[0]][findVectax[1]-1] == "1") Q.inqueue(`${findVectax[0]}-${findVectax[1]-1}`);
        //우
        if(findVectax[1]+1 < map[1] && array[findVectax[0]][findVectax[1]+1] == "1") Q.inqueue(`${findVectax[0]}-${findVectax[1]+1}`);
    }
    loop++;
    if(Q.getQueue().indexOf(goal) != -1) break;
}

console.log(loop);

// 0 과 1로 이루어진 미로에서 몇번만에 도착하는가