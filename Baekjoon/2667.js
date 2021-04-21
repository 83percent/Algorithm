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
    getVisitedLen() {return this.visited.length;}
}

const input = [
    "7",
    "0110100",
    "0110101",
    "1110101",
    "0000111",
    "0100000",
    "0111110",
    "0111000"
]
const size = parseInt(input.shift());
const map = input.map(e => e.split("").map(e => parseInt(e)));
let result = 0;
const building = [];
let Q = null;
for(let x=0; x<size; ++x) {
    for(let y=0; y<size; ++y) {
        if(map[x][y] == 1) {
            result++;
            Q = new Queue(`${x}-${y}`);
            while(Q.getQueue().length != 0) {
                let findVectax = Q.dequeue().split("-").map(e => parseInt(e));
                map[findVectax[0]][findVectax[1]] = 2;
                //상
                if(findVectax[0]-1 > -1 && map[findVectax[0]-1][findVectax[1]] == "1") Q.inqueue(`${findVectax[0]-1}-${findVectax[1]}`);
                //하
                if(findVectax[0]+1 < size && map[findVectax[0]+1][findVectax[1]] == "1") Q.inqueue(`${findVectax[0]+1}-${findVectax[1]}`);
                //좌
                if(findVectax[1]-1 > -1 && map[findVectax[0]][findVectax[1]-1] == "1") Q.inqueue(`${findVectax[0]}-${findVectax[1]-1}`);
                //우
                if(findVectax[1]+1 < size && map[findVectax[0]][findVectax[1]+1] == "1") Q.inqueue(`${findVectax[0]}-${findVectax[1]+1}`);
            }
            building.push(Q.getVisitedLen());
        }
    }
}
console.log(result);
building.sort((a,b) => a-b).forEach(e => console.log(e));