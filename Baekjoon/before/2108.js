const input = [
    "5",
    "1",
    "3",
    "8",
    "-2",
    "2"
]
const len = parseInt(input.shift());
const arr = input.map(e => parseInt(e));
const range = [arr[0], arr[0]];
let result = 0;

let counter = arr.reduce((acc, element) => {
    result += element;
    if(element < range[0]) range[0] = element;
    if(element > range[1]) range[1] = element;
    if(acc[element] == undefined) {acc[element] = 0;}
    acc[element]++;
    return acc;
}, {});

result = Math.round(result/len) + "\n";
arr.sort((a,b) => a-b);
counter = Object.entries(counter).sort((a,b) => {
    if(a[1] != b[1]) return a[1] - b[1];
    else return parseInt(a[0]) - parseInt(a[1])
});
counter = counter.filter(e => e[1] == counter[0][1]);
result += arr[Math.floor(len/2)] + "\n";
result += (counter.length == 1 ? counter[0][0] : counter[1][0]) + "\n";
result +=  range[1]-range[0] + "\n";

console.log(result);

// 2178 미로에서 빠른 길 찾기 (But 막혀있는 경우는 DFS로 찾아야함)