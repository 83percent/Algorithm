function solution(n, computers) {
    let result = 0;
    for(let x=0; x<n; ++x) {
        while(computers[x].includes(1)) {
            result++;
            const Q = new Queue(x);
            while(Q.getQueue().length != 0) {
                
                let point = Q.dequeue();
                for(let i=0; i<n; ++i) {
                    if(computers[point][i] == 1) {
                        computers[point][i] = 2;
                        Q.inqueue(i);
                    }
                }
            }
        }
    }    

    return result;
}
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

console.log(solution(3,[[1, 1, 0], [1, 1, 0], [0, 0, 1]]), 2);
console.log(solution(3,[[1, 1, 0], [1, 1, 1], [0, 1, 1]]),1);