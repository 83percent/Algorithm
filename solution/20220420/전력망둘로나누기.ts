(() => {
function solution(n:number, wires:number[][]):number {
    let result = n % 2 === 0 ? 0 : 1;
    let minGap = Infinity,
        loopEnd = false;
    const tree = wires.reduce((acc:number[][], wire) => {
        if(!acc[wire[0]]) acc[wire[0]] = [wire[1]];
        else acc[wire[0]].push(wire[1]);

        if(!acc[wire[1]]) acc[wire[1]] = [wire[0]];
        else acc[wire[1]].push(wire[0]);

        return acc;
    }, [])
    
    for(let index=1; index<tree.length; index++) {
        for(let sliceNode of tree[index]) {
            const visit = new Set([index]);
            let queues = [sliceNode];
            while(queues.length > 0) {
                const nextQueue = []
                for(let queue of queues) {
                    visit.add(queue);
                    nextQueue.push(...tree[queue as number].filter(e => !visit.has(e)));
                }
                queues = nextQueue;
            }
            const gap =  Math.abs(Math.abs(n - (visit.size-1)) - (visit.size-1));
            if(gap === result) {
                loopEnd = true
                minGap = gap;
                break;
            } else {
                if(minGap > gap) minGap = gap;
            }
        }
        if(loopEnd) break;
    }
    return minGap;
}

const n = 7;
const wires = 	[[1,2],[2,7],[3,7],[3,4],[4,5],[6,7]];
console.log(solution(n, wires), 1);
})();