"use strict";
(() => {
    function solution(id_list, report, k) {
        const __report = [...new Set(report)].map(element => element.split(" "));
        const map = new Map();
        const out = new Set();
        const temp = __report.reduce((acc, [from, to]) => {
            if (acc[from] === undefined)
                acc[from] = [to];
            else
                acc[from].push(to);
            if (map.has(to))
                map.set(to, map.get(to) + 1);
            else
                map.set(to, 1);
            return acc;
        }, {});
        for (let [id, count] of [...map]) {
            if (count >= k)
                out.add(id);
        }
        return id_list.reduce((acc, id) => {
            var _a;
            let count = 0;
            (_a = temp[id]) === null || _a === void 0 ? void 0 : _a.forEach(e => {
                if (out.has(e))
                    count++;
            });
            acc.push(count);
            return acc;
        }, []);
    }
    const id_list = ["muzi", "frodo", "apeach", "neo"];
    const report = ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"];
    const k = 2;
    console.log(solution(id_list, report, k));
})();
