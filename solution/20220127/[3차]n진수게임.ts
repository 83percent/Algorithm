(() => {
    function solution(n:number, t:number, m:number, p:number):string {
        let result = "";
        let number = 0,
            turn = 1,
            loop = 0,
            word = "";
        while(result.length !== t) {
            if(word[loop] === undefined) {
                word = number.toString(n);
                number++;
                loop = 0;
            }
            if(turn === p) result += word[loop];

            loop++;
            if(turn === m) turn = 1;
            else turn++;
            
        }
        return result.toUpperCase();
    }

    console.log(solution(16,16,2,1));
})();