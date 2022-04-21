let input = [
    '9 23',
    'BBBBBBBBBBBBBBBBBBBBBBB',
    'BBBBBBBBBBBBBBBBBBBBBBB',
    'BBBBBBBBBBBBBBBBBBBBBBB',
    'BBBBBBBBBBBBBBBBBBBBBBB',
    'BBBBBBBBBBBBBBBBBBBBBBB',
    'BBBBBBBBBBBBBBBBBBBBBBB',
    'BBBBBBBBBBBBBBBBBBBBBBB',
    'BBBBBBBBBBBBBBBBBBBBBBB',
    'BBBBBBBBBBBBBBBBBBBBBBW'
];
const [W, H] = input.shift().split(" ").map(e => parseInt(e));

const startW = Array.from({length : W}, (_, i) => {
    if(i%2 === 0) { // 0 2 4 6 8 10 ...
        return Array.from({length : H}, () => {

        });
    } else { // 1 3 5 7 9 11 ...

    }
});


let result = 0;
for(let w=0; w <= W-8; w++) {
    for(let h=0; h <= H-8; h++) {

        let tempB = 0;  // B 먼저 시작
        let tempW = 0;  // W 먼저 시작

        for(let i = w; i<w+8; i++) {
            const line = input[i]
            for(let j = h; j<h+8; j++) {
                if(j % 2 === 0) {
                    // 짝수
                    
                } else {
                    // 홀수 
                }
            }
        }
        const min = tempB < tempW ? tempB : tempW;
        if(result > min) result = min;
        if(result === 0) break;
    }
    if(result === 0) break;
}
console.log(result);