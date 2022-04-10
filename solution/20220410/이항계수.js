"use strict";
(() => {
    let input = ['5 2'];
    const [N, M] = input[0].split(" ").map(e => parseInt(e));
    function factorial(n) {
        return n ? n * factorial(n - 1) : 1;
    }
    console.log(factorial(N) / (factorial(M) * factorial(N - M)));
})();
