const input = "26";

function solution(input) {
    if(input === 0) console.log(1);
    if(input < 10) input = input + "0";

    let temp = input
    let loop = 0;
    
    do {
        temp = temp[1] + (parseInt(temp[0]) + parseInt(temp[1])) % 10;
        loop++;
    } while(temp !== input)
    console.log(loop)
}

solution(input)