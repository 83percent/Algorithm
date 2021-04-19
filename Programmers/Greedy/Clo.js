function solution(n, lost, reserve) {
    const stus = new Array(n);
    for(let i=0; i<n; ++i) {
        stus[i] = 1;
        if(lost.indexOf(i+1) >= 0) stus[i]--;
        if(reserve.indexOf(i+1) >= 0) stus[i]++;
    }
    

    stus.forEach((element, i) => {
        if(element == 2 && (stus[i+1] < 1 || stus[i-1] < 1)) {
            if(stus[i+1] < 1 && stus[i-1] < 1) {
                stus[i+1] +=0.5;
                stus[i-1] +=0.5;
                console.log(stus);
            } else if(stus[i+1] < 1) {
                stus[i+1] +=1;
            } else if(stus[i-1] < 1) {
                stus[i-1] +=1;
            }
            stus[i]--;
        }
        return element;
    });
    return Math.floor(stus.reduce((acc, value) => {
        if(value == 2) value = 1;
        return acc+=value;
    }, 0));
}
const n = 5;
const lost = [2, 4];
const reserve = [1, 3, 5];
console.log(solution(n, lost, reserve));