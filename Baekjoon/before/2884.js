const testCase = "10 10";
//const testCase = "10 30";
//const testCase = "23 40";
//const testCase = "00 45";

var input = testCase.split(' ');
let H = parseInt(input[0]);
let M = parseInt(input[1]);

console.log("H : ",H)
console.log("M : ",M)

if(M - 45 < 0) {
    if(H == 0) H = 23;
    else H--;
    M = 60- Math.abs(M-45);
} else M = M - 45;
console.log(H+" "+M);


