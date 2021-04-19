const line = "100 99 1000000000";
const q = line.split(" ").map(e => parseInt(e));

let position = 0;
let day = 0;

while(position < q[2]) {
    day++;
    position += q[0];
    if(position >= q[2]) break;
    else {
        position -= q[1];
    }
}
console.log(day);