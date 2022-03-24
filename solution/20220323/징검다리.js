(() => {
    function solution(distance, rocks, n) {

    }

    const exs = [
        [25, [2, 14, 11, 21, 17], 2, 4]
    ];
    for(let ex of exs) {
        const result = solution(ex[0], ex[1], ex[2]);
        console.log(result, result === ex[3]);
    }
})();