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
    "6 2",

"3 4",

"4 2",
]

const info = input.shift().split(" ").map(e => parseInt(e));
const array = Array.from(Array(info[0]), () => Array(info[0]).fill(0));
for(let element of input) {
    element = element.split(" ").map(e => parseInt(e-1));
    array[element[0]][element[1]] = 1;
    array[element[1]][element[0]] = 1;
}
let counter = 0;
for(let x =0; x< info[0]; ++x) {
    while(array[x].includes(1)) {
        counter++;
        const Q = new Queue(x);
        while(Q.getQueue().length != 0) {
            let point = Q.dequeue();
            for(let i=0; i<info[0]; ++i) {
                if(array[point][i] == 1) {
                    array[point][i] = 2;
                    Q.inqueue(i);
                }
            }
        }
    }
    
}
console.log(counter);