let input = [
    '9',
    '5 15 100 31 39 0 0 3 26',
    '11 12 13 2 3 4 5 9 1'
];
const A = input[1].split(" ").map(e => parseInt(e)).sort((a,b) => a-b);
const B = input[2].split(" ").map(e => parseInt(e)).sort((a,b) => b-a);
let result = 0;
for(let i = 0; i<A.length; i++) {
    result += A[i] * B[i];
}
console.log(result);