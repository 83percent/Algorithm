class Dijkstra {
    constructor(n, list, init) {
        
    }
}



// EX 1 부터 시작해서 최소 거리
let input = [
    "1 3 5",
    "1 2 2",
    "1 4 1",
    "3 4 3",
    "2 3 3",
    "2 4 2",
    "3 5 1",
    "3 6 5",
    "4 5 1",
    "5 6 2"
];

// settings
const map = Array.from(Array(6), () => Array(6).fill(Infinity));
const visited = Array.from(Array(6), () => false);
visited[0] = true;
input.forEach(line => {
    const e = line.split(" ");
    map[e[0]-1][e[1]-1] = parseInt(e[2]);
    map[e[1]-1][e[0]-1] = parseInt(e[2]);
});
for(let i=0; i<map.length; ++i) {map[i][i] = 0;}
let weight = [...map[0]];
console.log(map)
while(visited.includes(false)) {
    console.log("========================");
    console.log(weight)
    console.log(visited)

    // 다음 방문 안한것들 중 가장 작은 것
    let point = undefined;
    let min = undefined;
    for(let i=0; i<weight.length; ++i) {
        if(!visited[i]) {
            if(min != undefined) {
                if(min > weight[i]) {
                    point = i
                    min = weight[i]
                }
            } else {
                min = weight[i]
                point = i;
            };
        }   
    }
    visited[point] = true;
    for(const index in map[point]) {
        if(!visited[index]) {
            // 방문 안한 노드만 확인
            // 현재 위치의 값과 연결된 노드의 가중치를 더해서 최소값 배열의 값보다 작으면 대입
            if(min + map[point][index] < weight[index]) weight[index] = min + map[point][index];
        }
    }
}
console.log("결과 : ",weight);