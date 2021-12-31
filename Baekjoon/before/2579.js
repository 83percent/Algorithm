let input = [
    "6",
    "10",
    "20",
    "15",
    "25",
    "10",
    "20"
];
const size = parseInt(input.shift());
input = input.map(e => parseInt(e));
console.log(input)

let counter = -1;
let index = -1;
let score = 0;
while(index+1 < size) {
    if(counter == 1) {
        index+=2;
    }


    if(input[index+2] != undefined && input[index+1] < input[index+2]) {
        counter = 0
        index +=2;
    } else {
        index+=1;
    }
    score += input[index];
}
console.log(score);