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

        console.log(this.queue)
    }
    getQueue() {return this.queue};
    getVisited() {return this.visited}
}

const input = [
    "35",
    "30",
    "14 16",
    "12 22",
    "11 14",
    "11 12",
    "5 18",
    "6 31",
    "7 21",
    "29 34",
    "4 9",
    "15 27",
    "2 27",
    "25 32",
    "1 5",
    "2 32",
    "18 26",
    "26 27",
    "3 25",
    "12 24",
    "16 24",
    "1 2",
    "12 29",
    "20 31",
    "17 20",
    "6 12",
    "13 22",
    "5 34",
    "14 15",
    "4 26",
    "22 28",
    "16 18",
]
const computers = parseInt(input.shift());
const len = parseInt(input.shift());
const array = Array.from(Array(computers), () => Array(computers).fill(0));
for(let i=0; i<len; ++i) {
    const vectax = input[i].split(" ").map(e => parseInt(e));
    array[vectax[0]-1][vectax[1]-1] = 1;
    array[vectax[1]-1][vectax[0]-1] = 1;
}
const Q = new Queue(0);
while(Q.getQueue().length != 0) {
    let point = Q.dequeue();

    for(let i = 0; i<computers; ++i) {
        if(array[point][i] == 1) Q.inqueue(i);
    }
}
console.log(Q.getVisited());
console.log(Q.getVisited().length-1);
/* [
  [
    [0, 1, 0, 0, 1, 0, 0],
    [1, 0, 1, 0, 1, 0, 0],
    [0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1],
    [1, 1, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 1, 0, 0, 0]
  ]
] */