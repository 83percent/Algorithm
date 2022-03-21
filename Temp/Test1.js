function solution(total_sp, skills) {
    const set = new Set();
    const array = skills.reduce((acc, [after, before]) => {
        set.add(after).add(before);
        if(acc[after] === undefined) acc[after] = [before];
        else acc[after].push(before);
        return acc;
    }, []);

    const min = total_sp / (skills.length + set.size);
    const sp = [];

    function getSP(index) {
        
        if(Number.isInteger(array[index])) return array[index];
        if(array[index] === undefined) return min;
        let sum = 0;
        for(let _i of array[index]) {
            sum += getSP(_i);
        }
        return sum;
    }
    for(let i=0; i<set.size; i++) {
        console.log(sp)
        sp.push(getSP(i+1));
    }
    return sp;
}

const total_sp = 121;
const skills = 	[[1, 2], [1, 3], [3, 6], [3, 4], [3, 5]]	;
console.log(solution(total_sp, skills))