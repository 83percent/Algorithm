(() => {
    function solution(n:number):number {
        let result:number = 0;
        const len = n.toString(2).replace(/0/g, "").length;
        
        while(true) {
            n++;
            if(len === n.toString(2).replace(/0/g, "").length) break;
        }
        return n;
    }
    console.log(solution(78))
})();