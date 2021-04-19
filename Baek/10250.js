const input = [
    "2",
    "6 12 10",
    "30 50 72"
];
let result = "";
for(let i = 1; i < input.length; ++i) {
    const commands = input[i].split(" ").map(e => parseInt(e));
    let H = parseInt(commands[0])
    let chH = H;
    
    let N = parseInt(commands[2]); 
    while(N > chH) {chH += H;}
    let = X = chH/H
    result += `${H-(chH-N)}`+ (X > 9 ? `${X}` : `0${X}`) + "\n";
}
console.log(result)