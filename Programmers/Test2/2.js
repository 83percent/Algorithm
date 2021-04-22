function solution(N, road, K) {
    var answer = 0;
    const Q = new Queue([1,0]);
    const distance = [0];
    const list = road.reduce((acc, e) => {
        if(e[2] <= K) {
            if(acc[e[0]] == undefined) acc[e[0]] = [];
            acc[e[0]].push([e[1],e[2]]);
            if(acc[e[1]] == undefined) acc[e[1]] = [];
            acc[e[1]].push([e[0],e[2]]);
            return acc;
        }
    }, {});
    console.log(list);

    while(Q.getQueue().length != 0) {
        let point = Q.dequeue();
        console.log(Q.getQueue())
        for(const nodeInfos of list[point[0]]) {Q.inqueue(nodeInfos);}
    }
    return answer;
}

class Queue {
    constructor(init) {
        this.queue = [init];
        this.visited = [init];
    }
    dequeue() {
        this.visited.push(this.queue[0][0]);
        return this.queue.shift();
    }
    inqueue(vectax) {
        if(this.visited.indexOf(vectax[0]) != -1) return;
        this.queue.push(vectax);
        this.queue.sort((a,b) => a[1]-b[1])
    }
    getQueue() {return this.queue};
}

const N = 5;
const road = [[1,2,1],[2,3,3],[5,2,2],[1,4,2],[5,3,1],[5,4,2]];
const K = 3;
console.log(solution(N, road, K), 1);