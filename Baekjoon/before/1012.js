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
const input = [
    "2",
    "10 8 17",
    "0 0",
    "1 0",
    "1 1",
    "4 2",
    "4 3",
    "4 5",
    "2 4",
    "3 4",
    "7 4",
    "8 4",
    "9 4",
    "7 5",
    "8 5",
    "9 5",
    "7 6",
    "8 6",
    "9 6",
    "10 10 1",
    "5 5"
]

const loop = parseInt(input.shift());
let result = "";
for(let loopCounter = 0; loopCounter < loop; ++loopCounter) {
    let zirong = 0;
    const info = input.shift().split(" ").map(e => parseInt(e));
    let map = (() => {
        const array = Array.from(Array(info[1]), () => Array(info[0]).fill(0))
        for(let i=0; i<info[2]; ++i) {
            const vectax = input.shift().split(" ").map(e => parseInt(e));
            array[vectax[1]][vectax[0]] = 1;
        }
        return array;
    })();
    for(let x = 0; x<info[1]; ++x) {
        for(let y =0; y<info[0]; ++y) {
            let index = map[x][y];
            if(index == 1) {
                zirong++;
                const Q = new Queue(`${x}-${y}`);
                while(Q.getQueue().length != 0) {
                    let point = Q.dequeue().split("-").map(e => parseInt(e));
                    map[point[0]][point[1]] = 2;
                    if(point[0]-1 > -1 && map[point[0]-1][point[1]] == "1") Q.inqueue(`${point[0]-1}-${point[1]}`);
                    //하
                    if(point[0]+1 < info[1] && map[point[0]+1][point[1]] == "1") Q.inqueue(`${point[0]+1}-${point[1]}`);
                    //좌
                    if(point[1]-1 > -1 && map[point[0]][point[1]-1] == "1") Q.inqueue(`${point[0]}-${point[1]-1}`);
                    //우
                    if(point[1]+1 < info[0] && map[point[0]][point[1]+1] == "1") Q.inqueue(`${point[0]}-${point[1]+1}`);
                }
            }
        }
    }
    console.log(zirong);
}