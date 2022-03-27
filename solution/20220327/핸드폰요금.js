"use strict";
(() => {
    const input = [
        '2',
        '61 10'
    ];
    const result = input[1].split(" ").reduce((acc, time) => {
        time = parseInt(time);
        acc[0] += (Math.floor(time / 30) + 1) * 10;
        acc[1] += (Math.floor(time / 60) + 1) * 15;
        return acc;
    }, [0, 0]);
    if (result[0] === result[1]) {
        console.log(`Y M ${result[0]}`);
    }
    else {
        console.log(result[0] < result[1] ? `Y ${result[0]}` : `M ${result[1]}`);
    }
})();
