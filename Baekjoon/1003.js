const input = [
    "3",
    "0",
    "1",
    "3"
];

const loop = parseInt(input.shift());
let result = "";
for(let i=0; i<loop; ++i) {
    if(parseInt(input[i]) == 0) result += "1 0\n";
    else if(parseInt(input[i]) == 1) result += "0 1\n";
    else result += "1 2\n"
}
console.log(result);