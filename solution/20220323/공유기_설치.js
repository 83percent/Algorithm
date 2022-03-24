(() => {
    /*
    백준 - 공유기 설치
    문제를 잘 이해하지 못하겠음.
    */
    const input = [
        '5 3',
        '1',
        '2',
        '8',
        '4',
        '9'
    ];
    const [_, len] = input.shift().split(" ").map(e => parseInt(e));
    const houseArr = input.map(e => parseInt(e)).sort((a,b) => a-b);
    
    let start   = 1,
        end     = Math.max(...houseArr),
        mid     = 0;

    while(start <= end) {
        mid = Math.floor((start + end) / 2);
        
        let cnt = 0;
        
    }

})();