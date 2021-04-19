function solution(brown, yellow) {
    const round = (brown - 4)/2;
    let result = [];
    for(let i=0; i <= round; ++i) {
        if(i * (round - i) == yellow) {
            result = [round-i,i];
            break;
        }
    }
    return result;
}

const brown = 24;
const yellow = 24;
console.log(solution(brown, yellow));