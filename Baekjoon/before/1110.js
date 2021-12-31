const input = 1;
let str = String(input).split("");
// TODO
if(str.length === 1) str[1] = '0';

let newStr = [];
let loopCount = 0;
if(input == 0) loopCount++;
while(Number(newStr.join('')) != input) {
    newStr[0] = str[1];
    const sum = Number(str[0]) + Number(str[1]);
    newStr[1] = sum < 10 ? String(sum) : String(sum).split("")[1];
    str = [...newStr];
    
    console.log(str)
    loopCount++;
}

console.log(loopCount);
