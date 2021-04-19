input = [
    "5",
    "1 1",
    "12 34",
    "5 500",
    "40 60",
    "1000 1000"
]
let result = "";
const T = Number(input[0]);
for(let i=1; i<=T; ++i) {
    let q = input[i].split(" ");
    result += Number(q[0])+Number(q[1])+'\n';
}
console.log(result);