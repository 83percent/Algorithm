const input = [
    "3",
    "10 20 30"
];
const len = Number(input[0]);
const scores = input[1].split(" ").map(e => Number(e));

const max = Math.max.apply(null, scores);

