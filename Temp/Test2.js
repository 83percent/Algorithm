function solution(N, trees) {
    let min = [-1, Infinity],
        result = 0,
        max = Infinity;
    const sorted = trees.reduce((acc, [x,y]) => {
        if(min[1] > y) min = [x,y];

        for(let i=0; i<acc.length; i++) {
            if(acc[0][0] > x) {
                acc.splice(i, 0 ,[x,y]);
                pass = true;
            }
        }

        acc.push([x,y]);
        return acc;
    }, []);


    for(let i=0; i<trees.length; i++) {
        if(max > sorted[i][1]) {
            max = sorted[i][1];
            result++;
        }
        if(sorted[i][0] === min[0]) break;
    }

    return result;

    /* console.log(sorted, min)
    const maps = Array.from({length: N}, () => Array.from({length : N}, () => 0));
    trees.forEach(([x,y]) => {
        maps[x][y] = 1;
    })
    console.log(maps) */


}

const N = 5;
const trees = 	[[4, 3], [3, 1], [2, 2], [1, 4]];
console.log(solution(N, trees))