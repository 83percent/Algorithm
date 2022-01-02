const t_cases = [
    ["1S2D*3T", 37],
    ["1D2S#10S", 9],
    ["1D2S0T", 3],
    ["1S*2T*3S",23],
    ["1D#2S*3S", 5],
    ["1T2D3D#", -4],
    ["1D2S3T*", 59]
];


function solution(dartResult) {
    const scores = [0,0,0];
    let cursor = 0;
    for(const s of dartResult) {
        if(Number.isInteger(parseInt(s))) {
            if(s == "0" && scores[cursor] === 1) {
                scores[cursor] = 10;
            } else {
                scores[cursor] = Number(s);
            }
            continue;
        }
        switch(s) {
            case "S" : {
                cursor++;
                break;
            }
            case "D" : {
                scores[cursor] **= 2;
                cursor++;
                break;
            }
            case "T" : {
                scores[cursor] **= 3;
                cursor++;
                break;
            }
            case "*" : {
                scores[cursor-1] *= 2;
                if(cursor-2 >= 0) scores[cursor-2] *=2;
                break;
            }
            case "#" : {
                scores[cursor-1] *= -1;
                break;
            }
        }
    }
    return scores.reduce((acc, score) => acc += score, 0);
}



for(const t_case of t_cases) {
    const result = solution(t_case[0]);
    console.log(result, result == t_case[1]);
}