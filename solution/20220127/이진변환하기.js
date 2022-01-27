"use strict";
(() => {
    function solution(s) {
        const result = [0, 0]; //변환 횟수 , 제거된 0의 갯수
        while (s !== "1") {
            result[0]++;
            let len = s.length;
            s = s.replace(/0/g, "");
            result[1] += len - s.length;
            s = s.length.toString(2);
        }
        return result;
    }
    const s = "01";
    console.log(solution(s));
})();
