"use strict";
(() => {
    function solution(n) {
        let result = 1;
        //const numbers = Array.from({ length: Math.ceil(n / 2) }, () => index++);
        for (let i = 0; i < Math.ceil(n / 2); i++) {
            let sum = 0;
            let index = i+1
            while (sum < n) {
                sum += index;
                index++;
            }
            if (sum === n)
                result++;
        }
        return result;
    }
    console.log(solution(15));
})();
