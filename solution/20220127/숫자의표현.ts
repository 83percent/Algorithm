(() => {
    function solution(n:number):number {
        let result = 1;
        let index = 1;
        const numbers = Array.from({length : Math.ceil(n/2)}, () => index++);
        for(let i=0; i<Math.ceil(n/2); i++) {
            let sum = 0;
            while(sum < n) {
                sum += i+1;
            }
            if(sum === n) result++;
        }
        return result;
    }
    console.log(solution(15));
})();