const input = [
    "5",
    "1 6",
    "3 7",
    "6 2",
    "7 100",
    "9 635"
];


function solution(input) {
    const T = parseInt(input[0]);
    for(let round = 1; round <= T; round++) {
        const [a, b] = input[round].split(" ").map(e => parseInt(e));

        let temp = parseInt(String(a)[0]) || 1;
        for(let i = 2; i <= b; i++) {
            temp = (temp * a) % 10 || 1
        }
        console.log(temp)
    }
}

solution(input);

