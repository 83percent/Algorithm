const input = [
    "5 5 3"
    ,"5 4"
    ,"5 2"
    ,"1 2"
    ,"3 4"
    ,"3 1"
    ,"5 6"
    ,"2 7"
    ,"2 8"
];

const info = input.shift().split(" ").map(e => parseInt(e));
const list = {};
for(const element of input) {
    let node = element.split(" ").map(e => parseInt(e));
    if(list[node[0]] == undefined) list[node[0]] = [];
    if(list[node[1]] == undefined) list[node[1]] = [];
    list[node[0]].push(node[1]);
    list[node[1]].push(node[0]);
}
let max = 0;
for(const [key] of Object.entries(list)) {
    list[key].sort();
    max++;
}

const visited = [info[2]];
let stack = [info[2]];

while(visited.length != max) {
    let point = stack[0];
    if(list[point][0] == undefined) {
        let imsiStack = [];
        for(let i=1; i<stack.length; ++i) {
            imsiStack.unshift(stack[i]);
            if(list[stack[i]][0] != undefined) {
                point = stack[i];
                stack = [...imsiStack, ...stack];
                break;
            }
        }
    }
    let afterVectax = list[point][0] ;
    if(afterVectax == undefined) {break;}
    if(visited.includes(afterVectax)) list[point].shift();
    else {
        visited.push(afterVectax);
        stack.unshift(list[point].shift());
    }
}
console.log(stack.reverse());
