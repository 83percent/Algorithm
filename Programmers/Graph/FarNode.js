function solution(n, edge) {
    const array = Array.from(Array(n), () => Array(n).fill(0));
    const Q = new Queue(0);
    let loop = 1;
    let ABC = [];
    let loopCounter = Array.from(Array(n), () => 0);
    for(let vectax of edge) {
        array[vectax[0]-1][vectax[1]-1] = 1;
        array[vectax[1]-1][vectax[0]-1] = 1;
    }
    while(Q.getQueue().length != 0) {
        let size = Q.getQueue().length;
        for(let i =0; i<size; ++i) {
            let point = Q.dequeue();
            console.log(point)
            ABC.push(point);
            for(let y = point+1; y<n; ++y) {
                if(array[point][y] == 1) {
                    loopCounter[y] == 0 ? loopCounter[y] = loop : null;
                    Q.inqueue(y);
                }
            }
        }
        loop++;
    }
    console.log(ABC)
    let max = 0;
    console.log(loopCounter)
    let result = loopCounter.reduce((acc, value) => {
        if(value == 0) return acc;
        if(max == value) {
            acc++;
        } else {
            if(value > max) {
                max = value;
                acc = 1;
            }
        }
        return acc;
    }, 0)
    return result;
}
class Queue {
    constructor(init) {
        this.queue = [init];
        this.visited = [init];
    }
    inqueue(vectax) {
        if(this.visited.includes(vectax)) return;
        this.queue.push(vectax)
        this.visited.push(vectax);
    }
    dequeue() {return this.queue.shift()}
    getQueue() {return this.queue}
}



const n = 6;
const vertex = [[3, 6], [4, 3], [3, 2], [1, 3], [1, 2], [2, 4], [5, 2]];
console.log(solution(n,vertex));

/*
다익스트 알고리즘 이용
*/