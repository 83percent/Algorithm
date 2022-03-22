const input = [
    '5 6',
    '2 5 1 4 3',
    '1 5',
    '2 4',
    '3 3',
    '1 3',
    '2 5',
    '4 5'
];

const [arrLength, caseLength] = input.shift().split(" ").map(e => parseInt(e));
const arr = input.shift().split(" ").map((e) => parseInt(e)).sort((a,b) => a - b);

for(let i=0; i<caseLength; ++i) {
    const [start, end] = input[i].split(" ").map(e => parseInt(e));
    console.log(start, end)
}