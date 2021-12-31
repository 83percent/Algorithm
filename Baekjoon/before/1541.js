const line = "55-50+40";

let Q = line.split("-");
let result = (() => {
    let first = Q.shift().split("+").map(e => parseInt(e));
    if(first.length == 1) return first[0];
    else return first.reduce((acc,value) => acc+=value, 0);
})();;
while(Q.length > 0) {
    let turn = Q.shift().split("+").reduce((acc,value) => acc+= parseInt(value), 0);
    result -= turn;
}
console.log(result);