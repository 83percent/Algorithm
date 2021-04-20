function solution(n, edge) {
    const list = {};
    for(const element of edge) {
        if(list[element[0]] == undefined) list[element[0]] = [];
        if(list[element[1]] == undefined) list[element[1]] = []
        list[element[0]].push(element[1]);
        list[element[1]].push(element[0]);
    }
    for(const [key] of Object.entries(list)) {
        list[key].sort();
    }
    //console.log(list);
    const visited = [1];
    const queue = [1];
    let size = 1;
    while(queue.length != 0) {
        size = queue.length;
        for(let i=0; i<size; ++i) {
            let point = String(queue.shift());
            for(let next of list[point]) {
                if(!visited.includes(next)) {
                    visited.push(next);
                    queue.push(next);
                }
            }
        }
        //console.log(`${size} 깊이의 큐 상태 : `, queue);
        
    }
    return size;
}
/* const n = 4;
const vertex = [[1, 2], [2, 3], [3, 4]];
console.log(solution(5, [[4, 3], [3, 2], [1, 3], [1, 2], [2, 4], [5, 2]])); */
console.log(solution(6, [[3, 6], [4, 3], [3, 2], [1, 3], [1, 2], [2, 4], [5, 2]]), 3)
console.log(solution(11, [[1, 2], [1, 3], [2, 4], [2, 5], [3, 5], [
      3, 6], [4, 8], [4, 9], [5, 9], [5, 10], [6, 10], [6, 11]]), 4) 
console.log(solution(4, [[1, 2], [2, 3], [3, 4]]), 1)
console.log(solution(2, [[1, 2]]), 1)
console.log(solution(5, [[4, 3], [3, 2], [1, 3], [1, 2], [2, 4], [5, 2]]), 2)
console.log(solution(4, [[1, 2], [1, 3], [2, 3], [2, 4], [3, 4]]), 1)
console.log(solution(4, [[1, 4], [1, 3], [2, 3], [2, 1]]), 3)
console.log(solution(4, [[3, 4], [1, 3], [2, 3], [2, 1]]), 1)
console.log(solution(4, [[4, 3], [1, 3], [2, 3]]), 2)