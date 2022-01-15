"use strict";
(() => {
    function solution(info, query) {
        const result = [];
        const scores = [];
        const memory = {
            'cpp': [],
            'java': [],
            'python': [],
            'frontend': [],
            'backend': [],
            'junior': [],
            'senior': [],
            'chicken': [],
            'pizza': [],
        };
        for (let i = 0; i < info.length; i++) {
            const options = info[i].split(" ");
            for (let j = 0; j < 4; j++) {
                memory[options[j]].push(i);
            }
            scores.push(parseInt(options[4]));
        }
        for (let _query of query) {
            const options = _query.split(" ").filter(e => e !== "and");
            let array = undefined;
            for (let i = 0; i < 4; i++) {
                if (options[i] === "-")
                    continue;
                if (array === undefined) {
                    array = memory[options[i]];
                    continue;
                }
                const su = memory[options[i]];
                array = array.filter(e => su.includes(e));
                if (array.length === 0) {
                    array = null;
                    break;
                }
            }
            if (array === null) {
                result.push(0);
                continue;
            }
            let count = 0;
            const min = parseInt(options[4]);
            if (array === undefined) {
                scores.forEach(score => {
                    if (score >= min)
                        count++;
                });
            }
            else {
                for (const index of array) {
                    if (scores[index] >= min)
                        count++;
                }
            }
            result.push(count);
        }
        return result;
    }
    const info = ["java backend junior pizza 150", "python frontend senior chicken 210", "python frontend senior chicken 150", "cpp backend senior pizza 260", "java backend junior chicken 80", "python backend senior chicken 50"];
    const query = ["java and backend and junior and pizza 100", "python and frontend and senior and chicken 200", "cpp and - and senior and pizza 250", "- and backend and senior and - 150", "- and - and - and chicken 100", "- and - and - and - 150"];
    console.log(solution(info, query));
})();
