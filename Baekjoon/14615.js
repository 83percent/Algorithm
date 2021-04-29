const input = [
    "6 8",
    "1 3",
    "5 4",
    "3 5",
    "4 6",
    "1 2",
    "3 2",
    "3 4",
    "4 2",
    "3",
    "5",
    "4",
    "2"
];

const info = input.shift().split(" ").map(e => parseInt(e));
const list = {};
for(let i=0; i<info[1]; ++i) {
    const line = input.shift().split(" ").map(e => parseInt(e));
    if(!list[line[0]]) list[line[0]] = [];
    list[line[0]].push(line[1]);
}
const len = parseInt(input.shift());
for(let loop = 0; loop < len; ++loop) {
    const t = parseInt(input.shift());
    const targets = [[1,t], [t,info[0]]];   
    let pass = -1;
    for(let target of targets) {
        const map = JSON.parse(JSON.stringify(list));
        const stack = [target[0]];
        while(stack.length > 0) {
            let point = stack[0];
            if(map[point] != undefined && map[point].length > 0) {
                let next = map[point].shift()
                if(next == target[1]) {
                    pass++;
                    break;
                }
                stack.unshift(next);
            } else {
                stack.shift();
            }
        }
    }
    if(pass == 1) console.log("Defend the CTP")
    else console.log("Destroyed the CTP")
}