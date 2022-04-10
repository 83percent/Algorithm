"use strict";
(() => {
    let input = [
        '7 1 2 3 4 5 6 7',
        '8 1 2 3 5 8 13 21 34',
        '0',
    ];
    for(let i = 0; i < input.length - 1; i++) {
        const array = input[i].split(" ").map(e => parseInt(e));
        const k = array.shift();

        function combi(index, maxMove, loopCount, result) {
            if(loopCount === 6) {
                console.log(result.join(" "));
            } else {
                for(let i = index; i<maxMove+loopCount; i++) {
                    combi(i+1, maxMove, loopCount+1, [...result, array[i]])
                }
            }
        }
        combi(0, k-6+1, 0, []);
        //console.log("case : ",k, array);
        if(i < input.length - 2) console.log("");
    }
})();
