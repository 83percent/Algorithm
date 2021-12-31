const input = [
    "10 5",
    "1 10 4 9 2 3 8 5 7 6"
];

let result = "";
const info = input[0].split(" ");
const X = parseInt(info[1]);
const nArray = input[1].split(" ");

for(let i=0; i<parseInt(info[0]); ++i) {
    if(nArray[i] < X) result += `${nArray[i]} `;
}
console.log(result);