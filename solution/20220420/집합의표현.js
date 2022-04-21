"use strict";
(() => {
    const input = [
        '7 8',
        '0 1 3',
        '1 1 7',
        '0 7 6',
        '1 7 1',
        '0 3 7',
        '0 4 2',
        '0 1 1',
        '1 1 1'
    ];
    const cases = input.shift().split(" ").map(e => parseInt(e));
    const parentNode = Array.from({ length: cases[0] + 1 }, (__, index) => index);
    console.log(parentNode);
    for (let i = 0; i < cases[1]; i++) {
        const [action, dot1, dot2] = input[i].split(" ").map(e => parseInt(e));
        if (action === 0) {
        }
        else {
            console.log(parentNode[dot1] === parentNode[dot2] ? "YES" : "NO");
        }
    }
})();
