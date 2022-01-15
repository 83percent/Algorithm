"use strict";
(() => {
    function solution(n, words) {
        const word_set = new Set();
        let loop = 1, count = 1, prev = words[0][0];
        for (let word of words) {
            if (word_set.has(word) || prev !== word[0]) {
                return [count, loop];
            }
            word_set.add(word);
            prev = word[word.length - 1];
            if (count + 1 > n) {
                count = 1;
                loop++;
            }
            else {
                count++;
            }
        }
        return [0, 0];
    }
    const n = 3;
    const words = ["tank", "kick", "know", "wheel", "land", "dream", "mother", "robot", "tank"];
    console.log(solution(n, words));
})();
