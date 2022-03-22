(() => {
    const input = [
        '4 11',
        '802',
        '743',
        '457',
        '539'
    ]
    function solution(input) {
        const [_, hope] = input.shift().split(" ").map(e => parseInt(e));
        input = input.map(e => parseInt(e));
        
        let min = 1,
            mid = 0,
            max = Math.max(...input),
            answer = 0;
            
        while( min <= max ) {
            mid = Math.floor((min + max)/2);
            
            let canMake = 0;
            for(let line of input) {
                canMake += Math.floor(line / mid);
            }
            console.log(`|${min}-${mid}-${max}|`, canMake);
            
            if(canMake >= hope) {
                answer = answer > mid ? answer : mid;
                min = mid + 1;
            } else {
                max = mid - 1;
            }
        }

        return answer;
    }

    console.log(solution(input))
})();