const input = [
    "5",
    "1 1",
    "2 3",
    "3 4",
    "9 8",
    "5 2"
];
const T = Number(input[0]);
for(let i=1; i<=T; ++i) {
    const Q = input[i].split(" ");
    console.log(Number(Q[0]) + Number(Q[1]));
}