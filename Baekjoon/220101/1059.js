const input = [
    "4",
    "1 7 14 10",
    "2"
];

function solution(input) {
    const N = parseInt(input[0]);
    const numbers = input[1].split(" ").map(e => parseInt(e)).sort((a,b) => a-b);
    const n = parseInt(input[2]);

    if(numbers.includes(n)) return console.log(0);
    let min=undefined, max=undefined;
    for(let i=0; i<N-1; i++) {
        if(numbers[i] < n && numbers[i+1] > n) {
            min = numbers[i]+1;
            max = numbers[i+1];
        }
    }
    for(let i=min; i<max-1; i++) {
        for(let j=i+1; j<max; j++) {
            console.log(`[${i}, ${j}]`)
        }
    }
    
}

solution(input);