"use strict";
(() => {
    const input = '6 9 20';
    const [N, L, D] = input.split(" ").map(e => parseInt(e));
    let time = 0;
    const start = [], end = [];
    for (let i = 0; i < N; i++) {
        start.push(time);
        time += L;
        end.push(time);
        time += 5;
    }
    let ringTime = D;
    let find = false;
    for (let i in start) {
        while (ringTime < end[i]) {
            if (ringTime < start[i]) {
                find = true;
                console.log(ringTime);
                break;
            }
            if (ringTime + 1 < start[i]) {
                find = true;
                console.log(ringTime + 1);
                break;
            }
            ringTime += D;
        }
        if (find)
            break;
    }
    if (!find)
        console.log(ringTime);
})();
