const line = "2";

const N = parseInt(line);

let result = 0;
for(let i=1; i<N; ++i) {
    let value = i + String(i).split("").reduce((acc, value) => {acc += parseInt(value); return acc;}, 0);
    if(value == N) {
        result = i;
        break;
    }
}
console.log(result)
