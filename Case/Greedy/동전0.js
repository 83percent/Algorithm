"use strict";
(() => {
    let input = [
        '10 12',
        '1',
        '5',
        '10',
        '50',
        '100',
        '500',
        '1000',
        '5000',
        '10000',
        '50000'
    ];
    let [N, K] = input.shift().split(" ").map(e => parseInt(e));
    let result = 0;
    input = input.map(e => parseInt(e));
    while(K > 0) {
        for(let i=0; i<N; i++) {
            if(K-input[i] <= 0) {
                const temp = i-1 >= 0 ? parseInt(K / input[i-1]) : parseInt(K / input[i])
                result += temp;
                K -= i-1 >= 0 ? temp * input[i-1] : temp * input[i];
                console.log(temp, K)
                break;
            } else if(i+1 === N) {
                const temp = parseInt(K / input[i]);
                result += temp;
                K -= temp * input[i];
                console.log(temp, K)
                break;
            }
        }
    }
    console.log(result)
})();
