(() => {
    function solution(s:string):boolean {
        const stack = [];

        for(let letter of s) {
            if(stack.length === 0 || letter === "(") stack.push(letter);
            else if (stack[stack.length - 1] === "(") stack.pop();
            else break;
        }
        return stack.length === 0;
    }
    const s:string = "())))))";
    console.log(solution(s));
})();