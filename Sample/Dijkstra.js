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


class Dijkstra {
    /*
        @param n   정점의 갯수
        @param map 지도
    */
    constructor(n, map) {
        this.distance = Array.from({length : n}, () => Infinity);
        this.visited = Array.from({length : n}, () => false);
        this.map = map;
    }
    // @param start 시작점
    getDistance(start) {
        this.distance[start] = 0;
        this.visited[start] = true;

        let cursor = start;
        while(this.visited.includes(false)) {
            for(let index in this.map[cursor]) {
                if(this.visited.includes(index)) continue;

                const weight = this.map[cursor][index];
                if(weight === 0) continue;
                /*
                // 가중치 주기
                if(weight + this.distance[cursor] < this.distance[index]) { 
                    this.distance[index] = weight + this.distance[cursor];
                }
                */
                if(weight < this.distance[index]) { // 가중치 없음
                    this.distance[index] = weight;
                }
            }

            // 방문 안한 가장 작은 노드
            let next = [Infinity, -1];
            for(let i in this.visited) {
                if(!this.visited[i]) {
                    if(next[0] > this.distance[i]) next = [this.distance[i], i];
                }
            }
            if(next[1] === -1) break;
            this.visited[next] = true;
        }
        return this.distance;
    } // getDistance
}