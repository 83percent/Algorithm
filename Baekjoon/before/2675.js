const input = [
    "2",
    "3 ABC",
    "5 /HTP"
]

let result = "";
for(let i = 1; i<input.length; ++i) {
    const q = input[i].split(" ");
    for(let s of q[1]) {
        for(let l = 0; l < parseInt(q[0]); ++l) {

            result += s;
        }
    }
    result += '\n';
}
console.log(result);