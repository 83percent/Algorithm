"use strict";
(() => {
    function solution(dirs) {
        const set = new Set();
        let position = 61, temp;
        for (const s of dirs) {
            switch (s) {
                case "U": {
                    if (position - 11 > 0) {
                        temp = position;
                        position -= 11;
                        set.add(`${position}-${temp}`);
                    }
                    break;
                }
                case "D": {
                    if (position + 11 <= 121) {
                        temp = position;
                        position += 11;
                        set.add(`${temp}-${position}`);
                    }
                    break;
                }
                case "R": {
                    const max = Math.ceil(position / 11) * 11;
                    if (position + 1 <= max) {
                        temp = position;
                        position += 1;
                        set.add(`${temp}-${position}`);
                    }
                    break;
                }
                case "L": {
                    const min = ((Math.ceil(position / 11) - 1) * 11) + 1;
                    if (position - 1 >= min) {
                        temp = position;
                        position -= 1;
                        set.add(`${position}-${temp}`);
                    }
                    break;
                }
            }
        }
        return set.size;
    }
    const dirs = "LULLLLLLU";
    console.log(solution(dirs));
})();
