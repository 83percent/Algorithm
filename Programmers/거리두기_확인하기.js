const places = [
    ["POOOP", "OXXOX", "OPXPX", "OOXOX", "POXXP"],
    ["POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"],
    ["PXOPX", "OXOXP", "OXPOX", "OXXOP", "PXPOX"],
    ["OOOXX", "XOOOX", "OOOXX", "OXOOX", "OOOOO"],
    ["PXPXP", "XPXPX", "PXPXP", "XPXPX", "PXPXP"]
];

function solution(places) {
    const getManhattan = ([r1, c1], [r2, c2]) => {
        return Math.abs(r1-r2) + Math.abs(c1-c2);
    }
    const results = [];
    for(let Tn in places) {
        const positions = [];
        let _result = 1;
        let place = places[Tn].map((e, i) => {
            return e.split("");
        });
        
        const check = (_i, _j) => {
            // [min, max]
            const w_range = [ _i-1 < 0 ? 0 : _i-1, _i+1 > 4 ? 4 : _i+1];
            const h_range = [ _j-1 < 0 ? 0 : _j-1, _j+1 > 4 ? 4 : _j+1];
            

            
        }

        for(let i=0; i<5; i++) {
            for(let j=0; j<5; j++) {
                if(place[j][i] === "P") {
                    
                }
            }
        }
        
    }
    return results;

}

solution(places);