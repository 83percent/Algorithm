(() => {
    function solution(maps:number[][]):number {
        let distance = 1;
        const maxX = maps.length, maxY = maps[0].length;
        let queue:number[][] = [[0,0]];

        while(queue.length !== 0) {
            if(maps[maxX-1][maxY-1] === 0) break;
            const able_maps:number[][] = [];
            for(const [x,y] of [...queue]) {
                maps[x][y] = 0;
                // 우
                if(y+1 < maxY && maps[x][y+1] === 1) {
                    maps[x][y+1] = 0;
                    able_maps.push([x,y+1]);
                }
                // 하
                if(x+1 < maxX && maps[x+1][y] === 1) {
                    maps[x+1][y] = 0;
                    able_maps.push([x+1,y]);
                }
                // 상
                if(x-1 >= 0 && maps[x-1][y] === 1) {
                    maps[x-1][y] = 0;
                    able_maps.push([x-1,y]);
                }
                // 좌
                if(y-1 >= 0 && maps[x][y-1] === 1) {
                    maps[x][y-1] = 0;
                    able_maps.push([x,y-1]);
                }
            }
            queue = able_maps;
            distance++;
        }
        if(maps[maxX-1][maxY-1] === 0) return distance;
        else return -1;
    }

    const maps:number[][] = [[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,0],[0,0,0,0,1]];
    console.log(solution(maps));
})();

