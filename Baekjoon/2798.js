const input = [
    "10 500",
"93 181 245 214 315 36 185 138 216 295"
];

const info = input[0].split(" ").map(e => parseInt(e));
const q = input[1].split(" ").map(e => parseInt(e));
const len = info[0];
const max = info[1];
let sum = 0;
let result = 0;
let gap = 300000;
let minus = 0;
for(let x = 0; x < len; ++x) {
    for(let y = x+1; y < len; ++y) {
        for(let z = y+1; z < len; ++z) {
            sum = q[x] + q[y] + q[z];
            minus = max - sum;
            if(minus === 0) {result = sum; break;}
            if(minus > 0 && gap > minus) {gap = minus; result = sum}
        }
        if(max - sum === 0) break;
    }
    if(max - sum === 0) break;
}
console.log(result);