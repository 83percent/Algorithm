const input = [
    "5",
    "1 1",
    "2 3",
    "3 4",
    "9 8",
    "5 2"
];
const T = Number(input[0]);
    let result = "";
    for(let i=1; i<=T; ++i) {
        let q = input[i].split(" ")
        console.log(Number(q[0])+Number(q[1]));
        result += `Case #${i}: ${(Number(q[0])+Number(q[1]))}\n`;
    }
    console.log(result);