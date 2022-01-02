const t_cases = [
    [[[60, 50], [30, 70], [60, 30], [80, 40]], 4000],
    [[[10, 7], [12, 3], [8, 15], [14, 7], [5, 15]],120],
    [[[14, 4], [19, 6], [6, 16], [18, 7], [7, 11]],133]
];

function solution(sizes) {
    sizes = sizes.reduce((acc, [w2,h2]) => {
        const [w1, h1] = acc;
        if(w2 < h2) { // 스왑 h2 -> w2, w2 -> h2
            if(w1 < h2) {
                acc[0] = h2;
            }
            if(h1 < w2) {
                acc[1] = w2
            }
        } else {
            if(w1 < w2) {
                acc[0] = w2;
            }
            if(h1 < h2) {
                acc[1] = h2;
            }
        }
        return acc;
    }, [0, 0]);

    return sizes[0] * sizes[1]
}

for(const t_case of t_cases) {
    const result = solution(t_case[0]);
    console.log(result , result == t_case[1]);
}