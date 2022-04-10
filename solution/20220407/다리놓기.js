"use strict";
(() => {
    const input = [
        "3",
        "2 2",
        "1 5",
        "13 29"
    ];
    input.shift();
    function getCombinationCount(N, M) {
        function factorial(n) {
            return n ? n * factorial(n - 1) : 1;
        }
        return factorial(N) / (factorial(M) * factorial(N - M));
    }
    for (const line of input) {
        const [N, M] = line.split(" ").map(e => parseInt(e));
        console.log(Math.ceil(getCombinationCount(M, N)));
    }
})();
