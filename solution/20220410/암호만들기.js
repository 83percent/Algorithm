"use strict";
(() => {
    let input = [
        '4 6',
        'a t c i s w'
    ];
    const [L, C] = input[0].split(" ").map(e => parseInt(e));
    const chars = input[1].split(" ").sort();
    const __result = [];
    function combi(index, loopCount, result) {
        if (loopCount === L) {
            const s = result.join("").replace(/[aeiou]/g, "");
            if (s.length >= 2 && L - s.length >= 1)
                __result.push(result.join(""));
        }
        else {
            for (let i = index; i < C; i++) {
                if (!result.includes(chars[i])) {
                    combi(i + 1, loopCount + 1, [...result, chars[i]]);
                }
            }
        }
    }
    combi(0, 0, []);
    console.log(__result.sort().join("\n"));
})();
