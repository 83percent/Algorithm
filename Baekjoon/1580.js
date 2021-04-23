class Queue {
    constructor(init) {
        this.queue = [init];
        this.visited = [init];
    }
    dequeue() {
        return this.queue.shift();
    }
    inqueue(vectax) {
        if(this.visited.includes(vectax)) return;
        this.visited.push(vectax);
        this.queue.push(vectax);
    }
    getQueueLen() {return this.queue.length}
    getQueue() {return this.queue}
}

const input = [
    "3 9", // 세로 가로
    "XXXXXXXXX",
    "A.......B",
    "XXXX.XXXX"
];
const size = input.shift().split(" ").map(e => parseInt(e)); // [세로, 가로]
const Qs = [];
const goal = [];
const visited = [];
const map = input.map((e, x) => {
    let strs = e.split("");
    strs.forEach((s, y) => {
        if(s == "A" || s == "B") {
            goal.push(`${x}-${y}`);
            visited.push([`${x}-${y}`]);
            Qs.push(new Queue(`${x}-${y}`));
        }
    })
    return strs
});
goal.reverse();
console.log(visited)
let turn = 0;
while(Qs[0].getQueueLen() != 0 || Qs[1].getQueueLen() != 0) {
    turn++;
    for(let Q of Qs) {
        console.log(Q.getQueue());
        let pos = Q.dequeue().split("-").map(e => parseInt(e));

        // 상
        if(pos[0]-1 > -1 && map[pos[0]-1][pos[1]] == ".") Q.inqueue(`${pos[0]-1}-${pos[1]}`)
        
        // 하
        if(pos[0]+1 < size[0] && map[pos[0]+1][pos[1]] == ".") Q.inqueue(`${pos[0]+1}-${pos[1]}`)

        // 좌
        if(pos[1]-1 > -1 && map[pos[0]][pos[1]-1] == ".") Q.inqueue(`${pos[0]}-${pos[1]-1}`)

        // 우
        if(pos[1]+1 < size[1] && map[pos[0]][pos[1]+1] == ".") Q.inqueue(`${pos[0]}-${pos[1]+1}`)

    }
}
console.log(turn)
//const Qs = [new Queue()]


