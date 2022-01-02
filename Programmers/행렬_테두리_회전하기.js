const rows = 100;
const columns = 97;
const queries = [[1,1,100,97]];

let n = 1;
const map = Array.from({length : rows}, () => Array.from({length : columns}, () => n++));
const result = [];
for(const query of queries) {
    const stack = [];
    const [x1, y1, x2, y2] = query;
    let x = x1-1, y = y1-1;
    let min = Infinity;

    // Inqueue    
    for(y; y<y2-1; y++) {
        stack.push(map[x][y])
        if(min > map[x][y]) min = map[x][y];
    }
    
    for(x; x<x2-1; x++) {
        stack.push(map[x][y])
        if(min > map[x][y]) min = map[x][y];
    }

    for(y; y>y1-1; y--) {
        stack.push(map[x][y])
        if(min > map[x][y]) min = map[x][y];
    }

    for(x; x>x1-1; x--) {
        stack.push(map[x][y])
        if(min > map[x][y]) min = map[x][y];
    }
    result.push(min);
    stack.unshift(stack.pop());
    let index = 0;

    // Dequeue
    for(y; y<y2-1; y++) {
        map[x][y] = stack[index];
        index++;
    }
    
    for(x; x<x2-1; x++) {
        map[x][y] = stack[index];
        index++;
    }

    for(y; y>y1-1; y--) {
        map[x][y] = stack[index];
        index++;
    }

    for(x; x>x1-1; x--) {
        map[x][y] = stack[index];
        index++;
    }
}
console.log(result);
