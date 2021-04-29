const input = [
    "2",
    "10",
    "15"
];
input.shift();
let l = input.map(e => parseInt(e)).sort((a,b) => b-a);
let max = l.shift();
let use = [max];


while(l.length > 0) {
    let minNextLoopWeight = max / (use.length+1);
    if(l[0] <= minNextLoopWeight) break;
    else {
        use.unshift(l.shift());
        max = use[0] * use.length;
    }
}
console.log(max);