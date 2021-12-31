const input = [
"1",
"5 3",
"1 0 0 1 0",
"0 1 0 0 1",
"0 0 0 1 0",
"0 0 0 0 0",
"0 0 1 0 0"
];
const result = 1;

/*
    풀이
*/

const T = Number(input.shift());
for(let _case=0; _case < T; _case++) {
    const [N, K] = input.shift().split(" ").map(e => parseInt(e));
    const map = [];
    
    let n = 0;
    let min = 0;
    while(n < N) {
        const line = input.shift().split(" ").map(e => {
            if(e === "1") min++;
            return parseInt(e)
        });
        map.push(line);
        n++;
    }
    if(N === K || min === 0) console.log("결과 : ", 0);

    
    while(true) {
        let count = 0;
        for(let i=index; i<K; i++) {
            for(let j=index; j<K; j++) {
                if(map[i][j] === 1) count++;
            }
        }
        console.log(count);
        index++;
    }
}