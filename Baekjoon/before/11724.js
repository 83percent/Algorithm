const input = [
    "6 5",
    "1 2",
    "2 5",
    "5 1",
    "3 4",
    "4 6"
];


/*
    Seconds Solve
    Use Union_Find
*/
function solve2(input) {
    class UnionFind {
        constructor(N) {
            this.parent = new Array(N+1);
            for(let i=0; i<this.parent.length; ++i) {
                this.parent[i] = i;
            }
        }
        getParent(x) {
            if(this.parent[x] == x) return x;
            else return this.getParent(this.parent[x]);
        }
        UnionParent(a,b) {
            a = this.getParent(this.parent[a]);
            b = this.getParent(this.parent[b]);
            if(a<=b) this.parent[b] = a;
            else this.parent[a] = b;
        }
    }

    const size = input.shift().split(" ").map(e => parseInt(e));
    const unionFind = new UnionFind(size[0])
    for(const edge of input) {
        const vectax = edge.split(" ").map(e => parseInt(e));
        unionFind.UnionParent(vectax[0], vectax[1]);
    }
    return unionFind.parent.reduce((acc, parent) => {
        if(!acc.includes(parent)) acc.push(parent);
        return acc;
    }, []).length-1;
}



/* 
    First Solve.
    Use Queue
*/

function solve1(input) {
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
    return counter
}


//console.log(solve1(input));
console.log(solve2(input));