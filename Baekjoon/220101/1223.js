let line = "3 2 3";
line = line.split(" ").map(e => parseInt(e));
const result = [];
let sum = 0;
for(let x=1; x<=line[0]; x++) {
    for(let y=1; y<=line[1]; y++) {
        for(let z=1; z<=line[2]; z++) {
            sum = x + y + z;
            if(result[sum] === undefined) result[sum] = 1;
            else result[sum]++;
        }
    }
}

console.log(result.reduce((acc, number, index) => {
    if(number > acc[1]) acc = [index, number]
    return acc;
}, [0, 0])[0]); // (번호, 몇번 나왔는지)