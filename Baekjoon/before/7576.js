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
    "2 2",
"1 -1",
"-1 1",
];
const size = input.shift().split(" ").map(e => parseInt(e));
const map = input.map(e => {
    return e.split(" ").map(e => parseInt(e));
})
const startPoint = [];
const info = map.reduce((acc, line, x) => {
    line.forEach((element,y) => {
        if(element != 0) {
            if(element == 1) {
                startPoint.push(`${x}-${y}`);
            } else acc++
        }
    });
    return acc;
}, 0)

const clearCount = (size[0] * size[1]) - info;
const visited = startPoint;
const Qs = [];
for(let i in startPoint) {
    Qs[i] = new Queue(startPoint[i]);
}

let days = 0;
while(visited.length != clearCount) {
    days++;
    for(let i in Qs) {
        let branchSize = Qs[i].getQueue().length;
        for(let loop = 0; loop<branchSize; ++loop) {
            let findIndex = Qs[i].dequeue().split("-").map(e => parseInt(e));
            map[findIndex[0]][findIndex[1]] = 1;
            //상
            if(findIndex[0]-1 > -1 && map[findIndex[0]-1][findIndex[1]] == "0" && !visited.includes(`${findIndex[0]-1}-${findIndex[1]}`)) {
                Qs[i].inqueue(`${findIndex[0]-1}-${findIndex[1]}`);
                visited.push(`${findIndex[0]-1}-${findIndex[1]}`);
            }
            //하
            if(findIndex[0]+1 < size[1] && map[findIndex[0]+1][findIndex[1]] == "0" && !visited.includes(`${findIndex[0]+1}-${findIndex[1]}`)) {
                Qs[i].inqueue(`${findIndex[0]+1}-${findIndex[1]}`);
                visited.push(`${findIndex[0]+1}-${findIndex[1]}`)
            }
            //좌
            if(findIndex[1]-1 > -1 && map[findIndex[0]][findIndex[1]-1] == "0" && !visited.includes(`${findIndex[0]}-${findIndex[1]-1}`)) {
                Qs[i].inqueue(`${findIndex[0]}-${findIndex[1]-1}`);
                visited.push(`${findIndex[0]}-${findIndex[1]-1}`)
            }
            //우
            if(findIndex[1]+1 < size[0] && map[findIndex[0]][findIndex[1]+1] == "0" && !visited.includes(`${findIndex[0]}-${findIndex[1]+1}`)) {
                Qs[i].inqueue(`${findIndex[0]}-${findIndex[1]+1}`);
                visited.push(`${findIndex[0]}-${findIndex[1]+1}`)
            }
        }
        if(Qs[i].getQueue().length == 0) {Qs.splice(i,1);}
    }
    if(visited.length != clearCount&&Qs.length == 0) {
        days=-1;    
        break;
    }
}


console.log("day : ", days)