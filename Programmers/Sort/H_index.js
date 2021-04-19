function solution(citations) {
    let h = -1;
    do {
        h++;
        citations = citations.filter(element => {
            return element >= h;
        });
        console.log(`h = ${h}, len = ${citations.length} : ${citations}`);
        if(citations.length == 0 || citations.length/2 < h) {
            h = 0;
            break;
        }
    } while(citations.length != h);
    return h;
}

const citations = [0, 1, 2];
//const citations = [0, 0 ,0 ,0];
//const citations = [3, 0, 6, 1, 5];
console.log(solution(citations));