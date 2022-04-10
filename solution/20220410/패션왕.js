"use strict";
(() => {
    let input = [
        '2',
        '3',
        'hat headgear',
        'sunglasses eyewear',
        'turban headgear',
        '3',
        'mask face',
        'sunglasses face',
        'makeup face'
    ];
    const loop = parseInt(input.shift());
    let i = 0;
    const max = input.length;
    while (i < max) {
        const L = parseInt(input[i]);
        i++;
        const obj = {};
        for (let j = i; j < i + L; j++) {
            const [_, key] = input[j].split(" ");
            if (obj[key] === undefined)
                obj[key] = 2;
            else
                obj[key]++;
        }
        let result = 1;
        for (let count of Object.values(obj)) {
            result *= count;
        }
        console.log(result - 1);
        i += L;
    }
})();
