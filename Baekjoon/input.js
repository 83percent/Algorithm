
//한줄
var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split(' '); 

// 여러줄
var fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');


// TODO

console.log(a+b);



//한줄
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
rl.on('line', function(line) {
    // line 읽어온 전체
    input = line.split(" "); // 띄어 쓰기 별로 나눠서 배열입력
    input = line.split("\n"); // 줄 별로 나눠서 배열입력
    rl.close();
}).on("close", function() {

    //코드 작성?

    process.exit();
});


// 여러줄 fs로 받으면 에러나서 이거씀 대신 이거 느려서 시간초 제한 있는거에는 못씀
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    // input에 테스트 케이스를 넣는 작업
    input.push(line)
})
    .on('close', function () {
    // 넣은 테스트 케이스 배열 input을 사용하는 작업
    // TODO
    console.log(input[0]) // 첫번쨰 줄을 나타냄 
    process.exit();
});

// ---------------------------------------------------

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input.push(line)
})
    .on('close', function () {

    process.exit();
});