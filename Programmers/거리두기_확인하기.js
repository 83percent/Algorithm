const places = [
    ["POOOP", "OXXOX", "OPXPX", "OOXOX", "POXXP"],
    ["POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"],
    ["PXOPX", "OXOXP", "OXPOX", "OXXOP", "PXPOX"],
    ["OOOXX", "XOOOX", "OOOXX", "OXOOX", "OOOOO"],
    ["PXPXP", "XPXPX", "PXPXP", "XPXPX", "PXPXP"]
];

function solution(places) {
    const getManhattan = ([r1, c1], [r2, c2]) => {
        return Math.abs(r1-r2) + (c1-c2);
    }
    for(let Tn in places) {
        const positions = [];
        let place = places[Tn].map((e, i) => {
            for(let j=0; j<5; j++) {
                if(e[j] === "P") positions.push([i,j]);
            }
            return e.split("");
        });
        while(positions.length !== 0) {
            const point = positions.pop();
            for(let i=positions.length-1; i>=0; i--) {
                
            }
        }
        
    }

}

solution(places);