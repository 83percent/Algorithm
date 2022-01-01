const input = [
    "5 5 3",
    "5 4",
    "5 2",
    "1 2",
    "3 4",
    "3 1"
];

function solution(input) {
    const [N, M, V] = input.shift().split(" ").map(e => parseInt(e));
    const list = {};
    for(let line of input) {
        const [s, e] = line.split(" ").map(e => parseInt(e));
        if(!list[s]) list[s] = [e];
        else {
            list[s].push(e);
            list[s].sort((a,b) => a - b)
        }
        if(!list[e]) list[e] = [s];
        else {
            list[e].push(s);
            list[e].sort((a,b) => a - b)
        }
    }
    console.log(list)
    const DFS = ((list, start) => {
        const stack = [start];

        function find(position) {
            if(!list[position]) return;
            for(let next of list[position]) {
                if(stack.includes(next)) continue;
                stack.push(next);
                find(next);
            }
        }
        find(start);
        return stack;
    })(list, V);
    console.log(DFS.join(" "));

    const BFS = ((list, start) => {
        const queue = [start];
        const visited = [];
        while(queue.length > 0) {
            const position = queue.shift();
            visited.push(position);

            if(!list[position]) continue;

            for(let next of list[position]) {
                if(!visited.includes(next) && !queue.includes(next)) queue.push(next);
            }
        }
        return visited;
    })(list, V);
    console.log(BFS.join(" "));
}

solution(input);