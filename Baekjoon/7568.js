const input = [
    "5",
    "55 185",
    "58 183",
    "88 186",
    "60 175",
    "46 155"
];
const info = input.map((e) => {
    return e.split(" ").map(e => parseInt(e));
});
let result = "";
info.shift();
const array = info.map((A, i1) => {
    return info.reduce((acc, B, i2) => {
        if(A[0] < B[0] && A[1] < B[1]) {acc++;}
        return acc;
    }, 0);
}).forEach(e => result += `${e+1} `);


console.log(result);