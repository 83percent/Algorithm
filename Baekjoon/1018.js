const input = [
    "8 8",
"WBWBWBWB",
"BWBWBWBW",
"WBWBWBWB",
"BWBBBWBW",
"WBWBWBWB",
"BWBWBWBW",
"WBWBWBWB",
"BWBWBWBW"
];
const len = input[0].split(" ").map(e => parseInt(e));
const col = [["W","B","W","B","W","B","W","B"], ["B","W","B","W","B","W","B","W"]];
let X = 8; Y = 8;
let initColor = '';
let pass = true, min = 64;

do {
    X = 8;
    do {
        console.log(`X = ${X-8} ~ ${X}`)
        let changeCounter = 0;
        initColor = input[Y-7][X-8];
        pass = initColor == 'W' ? 1 : 0;
        for(let y = Y-7; y < Y+1; ++y) {
            pass = pass == 0 ? pass+1 : pass-1;
            index = 0;
            for(let x = X-8; x<X; ++x) {
                if(input[y][x] != col[pass][index]) changeCounter++;
                console.log(`${y} - ${x} = ${input[y][x]} 비교값 ${index}, ${col[pass][index]}`)
                index++;
            }
        }
        console.log("==================")
        if(min > changeCounter) min = changeCounter;
        if(X == len[1]) break;
        X++;
    } while(X <= len[1]); 
    if(Y == len[0]) break;
    console.log("Y번째 까지 = ", Y)
    Y++;
} while(Y <= len[0]);
console.log(min);