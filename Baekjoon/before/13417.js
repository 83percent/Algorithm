const input = [
    "3",
    "3",
    "M K U",
    "5",
    "A S D F G",
    "7",
    "B A C A B A C"
];

const Q = parseInt(input.shift());
for(let q = 0; q<Q; ++q) {
    let len = parseInt(input.shift())-1;
    let strs = input.shift().split(" ");
    let result = [];
    while(strs.length != 0) {
        //let out = strs[0] <= strs[len] ? strs.shift() : strs.pop();
        let out = strs.shift()
        len--;
        if(!result[0]) result.push(out);
        else {
            result[0] >= out ? result.unshift(out) : result.push(out);
        }
    }
    console.log(result.join(""))
}