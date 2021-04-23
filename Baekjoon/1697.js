const line = "5 17";

const pos = line.split(" ").map(e => parseInt(e)).sort((a,b) => a-b);

console.log(pos);

let counter = 0;
while(pos[0] != pos[1]) {
    counter++;
    if(pos[1] - (pos[0]*2) >= 0) pos[0] *= 2;
    else pos[0]++;
    console.log(pos);
}
console.log(counter);