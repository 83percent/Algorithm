/*
    미로만들기

*/
let input = [
    "8",
    "11100110",
    "11010010",
    "10011010",
    "11101100",
    "01000111",
    "00110001",
    "11011000",
    "11000111"
];

const siee = parseInt(input.shift());
const map = input.map(e => e.split("").map(e => parseInt(e)));

/*
    BFS를 사용하여 지나는 경로에 검은색(0)이 몇개 있는지 파악
    BFS Queue를 사용
*/
class Queue {
    constructor(init) {
        this.queue = [init];
        this.visited = new Set([init]);
    }
    dequeue() {return this.queue.shift();}
    inqueue(vectax) {
        if(this.visited.has(init)) return;
        this.visited.set(init);
        this.queue.push(vectax);
    }
    getQueue() {return this.queue;}
    getVisitedSize() {return this.visited.size};
}


