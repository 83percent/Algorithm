(() => {
    const input = [
        '5',
        '6 3 2 10 -10',
        '8',
        '10 9 -5 2 3 4 5 -10'
    ];

    const array = input[1].split(" ").map(e => parseInt(e)).sort((a,b) => a-b);;
    const cards = input[3].split(" ").map(e => parseInt(e));
    let answer = "";
    for(let card of cards) {
        let start   = 0,
            end     = array.length-1,
            mid     = 0,
            isExist = false;
        
        while(start <= end) {
            mid = Math.floor((start + end)/2);
            const temp = array[mid];
            if(temp === card) {
                isExist = true;
                break;
            } else if(temp < card) {
                start = mid+1;
            } else { // card < temp
                end = mid-1;
            }
        }
        answer += isExist ? "1 " : "0 ";
    }
    console.log(answer.trim());

})();