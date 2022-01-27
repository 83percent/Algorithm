"use strict";
(() => {
    function solution(s) {
        const stack = [];
        for (let letter of s) {
            if (stack.length === 0 || letter === "(")
                stack.push(letter);
            else if (stack[stack.length - 1] === "(")
                stack.pop();
            else
                break;
        }
        return stack.length === 0;
    }
    const s = "())))))";
    console.log(solution(s));
})();
