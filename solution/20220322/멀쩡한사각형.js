(() => {
    function solution(w, h) {
        function getGcd(a,b) {
            return a % b === 0 ? b : getGcd(b, a%b);
        }
        return (w * h)- (w + h - getGcd(w,h));
    }

    const exs = [
        [8, 12, 80]
    ];

    for(let ex of exs) {
        const result = solution(ex[0], ex[1]);
        console.log(result, result === ex[2]);
    }

})();