"use strict";
(() => {
    function solution(N, road, K) {
        const times = Array.from({ length: N }, () => Infinity);
        times[0] = 0;
        const road_info = road.reduce((acc, [city1, city2, distance]) => {
            if (acc[city1 - 1] === undefined)
                acc[city1 - 1] = [[city2 - 1, distance]];
            else
                acc[city1 - 1].push([city2 - 1, distance]);
            if (acc[city2 - 1] === undefined)
                acc[city2 - 1] = [[city1 - 1, distance]];
            else
                acc[city2 - 1].push([city1 - 1, distance]);
            return acc;
        }, {});
        let position = 0;
        const visited = new Set();
        for (let i = 0; i < N; i++) {
            visited.add(position);
            road_info[position].forEach(element => {
                if (!visited.has(element[0]) && times[element[0]] > times[position] + element[1])
                    times[element[0]] = times[position] + element[1];
            });
            let min = times.reduce((min, distance, index) => {
                if (!visited.has(index) && min[1] > distance)
                    min = [index, distance];
                return min;
            }, [-1, Infinity]);
            if (min[0] === -1)
                break;
            position = min[0];
        }
        return times.reduce((count, distance) => {
            if (distance <= K)
                count++;
            return count;
        }, 0);
    }
    const N = 5, K = 3, road = [[1, 2, 1], [2, 3, 3], [5, 2, 2], [1, 4, 2], [5, 3, 1], [5, 4, 2]];
    console.log(solution(N, road, K));
})();
