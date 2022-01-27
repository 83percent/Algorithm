"use strict";
(() => {
    function solution(n, k) {
        let result = 0;
        let word = n.toString(k).split("").reduce((acc, l) => {
            if (l !== "0") {
                if (acc[acc.length - 1] === "0")
                    acc.push(l);
                else
                    acc[acc.length - 1] += l;
            }
            else
                acc.push("0");
            return acc;
        }, [""]);
        const sync = ((s, is) => {
            word.map(element => element === s ? is ? "P" : "N" : element);
        });
        function isPrime(s) {
            if (s === "P")
                return true;
            else if (s === "N")
                return false;
            const number = parseInt(s);
            if (number <= 1) {
                sync(s, false);
                return false;
            }
            ;
            if (number === 2) {
                sync(s, true);
                return true;
            }
            ;
            if (number % 2 === 0) {
                sync(s, false);
                return false;
            }
            ;
            const max = Math.sqrt(number);
            for (let i = 3; i <= max; i += 2) {
                if (number % i === 0) {
                    sync(s, false);
                    return false;
                }
                ;
            }
            sync(s, true);
            return true;
        }
        if (word.length === 1)
            return isPrime(word[0]) ? 1 : 0;
        if (word[1] === "0" && isPrime(word[0]))
            result++;
        if (word[word.length - 2] === "0" && isPrime(word[word.length - 1]))
            result++;
        if (word.length === 2)
            return result;
        for (let i = 1; i < word.length - 1; i++) {
            if (word[i - 1] === "0" && word[i + 1] === "0") {
                if (word[i] === "P" || isPrime(word[i]))
                    result++;
            }
        }
        return result;
    }
    console.log(solution(110011, 10));
})();
