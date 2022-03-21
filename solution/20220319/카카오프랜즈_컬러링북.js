(() => {
    function solution(m, n, picture) {
        let max = 0;
        let areaCount = 0;
        function getArea(i, j, color) {
            picture[i][j] = 0;
            let changeCount = 1;

            let queue = [`${i}-${j}`];
            while(queue.length !== 0) {
                queue = queue.reduce((acc, element) => {
                    const [y,x] = element.split("-").map(e => parseInt(e));
                    // 상
                    if(y - 1 >= 0 && picture[y-1][x] === color) {
                        picture[y-1][x] = 0;
                        changeCount++;
                        acc.push(`${y-1}-${x}`);
                    }
                    // 하
                    if(y + 1 < m && picture[y+1][x] === color) {
                        picture[y+1][x] = 0;
                        changeCount++;
                        acc.push(`${y+1}-${x}`);
                    }
                    // 좌
                    if(x - 1 >= 0 && picture[y][x-1] === color) {
                        picture[y][x-1] = 0;
                        changeCount++;
                        acc.push(`${y}-${x-1}`);
                    }
                    // 우
                    if(x + 1 < n && picture[y][x+1] === color) {
                        picture[y][x+1] = 0;
                        changeCount++;
                        acc.push(`${y}-${x+1}`);
                    }
                    return acc;
                }, [])
            }
            
            return changeCount;
        }
        for(let i=0; i<m; i++) {
            for(let j=0; j<n; j++) {
                if(picture[i][j] !== 0) {
                    const count = getArea(i, j, picture[i][j]);
                    if(count > max) max = count;
                    areaCount++;
                }
            }
        }
        return [areaCount, max];
    }

    const result = solution(6, 4, [[1, 1, 1, 0], [1, 2, 2, 0], [1, 0, 0, 1], [0, 0, 0, 1], [0, 0, 0, 3], [0, 0, 0, 3]]);
    console.log(result);
})();