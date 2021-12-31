const input = [
    "423100341",
    "25"
];

function solution(input) {
    const [a, b] = input.map(e => parseInt(e));
    let init = a % 100;
    for(let i=0; i<100; i++) {
        if(Number.isInteger((a - (init - i)) / b)) {
            console.log(String(i).padStart(2, "0"));
            break;
        }
    }
}

solution(input)