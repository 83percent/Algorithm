(() => {
    function solution(n, times) {
        times.sort((a,b) => a-b);

        let answer = 0;
        let start = 1;
        let end = Math.max(...times) * n;
        let mid = 0;
        while(start <= end) {
            mid = Math.ceil((start+end)/2);
            let p = 0; // 심사관 한명당 mid 시간동안 심사할 수 있는 사람 수            
            for(let time of times) {
                p += Math.floor(mid / time);
            }
            if(p >= n) {
                end = mid - 1;
                answer = mid;
            } else {
                start = mid + 1;
            }
        }
        return answer;
    }

    const exs = [
        [6, [10,7], 28]
    ];
    for(let ex of exs) {
        let result = solution(ex[0], ex[1]);
        console.log(result, result === ex[2]);
    }
})();