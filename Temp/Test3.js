function solution(v,q) {
    return q.reduce((acc, [a,b,c]) => {
        if(a === 1) {
            let sum = (b-c) % 2 === 1 ? 0 : v[(b+c)/2];
            for(let i=0; i<Math.floor((c-b)/2); i++) {
                sum += v[b+i] + v[c-i];
                console.log(sum)
            }
            acc.push(sum);
        } else {
            v[b] = c;
        }
        return acc;
    }, []);
}


const v = [1,2,3,4,5];
const q = [ [1,2,4] , [2,3,8], [1,2,4] ]	;
console.log(solution(v,q))