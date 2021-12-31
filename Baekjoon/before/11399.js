const input = [
    "0"
];

const N = parseInt(input.shift());
if(N != 0) {
    const wait = input.shift().split(" ").map(e => parseInt(e));
    wait.sort((a,b) => a-b);
    let waitTime = 0;
    let result = 0;
    for(let i=0; i<N; ++i) {
        result += waitTime + wait[i];
        waitTime += wait[i];
    }
    console.log(result);
} else {
    console.log(0);
}
