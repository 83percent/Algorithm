"use strict";
(() => {
    let input = [
        '5',
        '3 2 4 1'
    ];
    const L = parseInt(input[0]);
    const permutations = input[1].split(" ").map(e => parseInt(e));
    let temp = 0;
    let breakPos = -1;
    for (let i = L - 1; i >= 0; i--) {
        if (permutations[i] < temp) {
            breakPos = i;
            temp = permutations[i];
            break;
        }
        else {
            temp = permutations[i];
        }
    }
    if (breakPos < 0) {
        console.log('-1');
    } else {
        let result = permutations.slice(0, breakPos);
        let lessArray = permutations.slice(breakPos + 1, permutations.length).sort((a, b) => a - b);
        if(result.length === 0) {
            result = [permutations[0]+1, ...Array.from({length : L}, (_, index) => index+1).filter(e => e !== permutations[0] + 1)];
        } else {
            const min = lessArray.filter(e => e > temp).sort((a,b) => a - b)[0];
            result.push(min);
            lessArray.push(temp);
            result.push(...lessArray.filter(e => e !== min).sort((a,b) => a - b));
        }
        console.log(result.join(" "));
    }
})();
