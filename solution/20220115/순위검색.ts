(() => {
    function solution(info:string[], query:string[]):number[] {
        const result:number[] = [];
        const scores:number[] = [];
        const memory:{[propName: string]:number[]} = {
            'cpp': [],
            'java' : [],
            'python' : [],
            'frontend' : [],
            'backend' : [],
            'junior' : [],
            'senior' : [],
            'chicken' : [],
            'pizza' : [],
        };

        for(let i=0; i<info.length; i++) {
            const options:string[] = info[i].split(" ");
            for(let j=0; j<4; j++) {
                memory[options[j]].push(i);
            }
            scores.push(parseInt(options[4]));
        }

        for(let _query of query) {
            const options:string[] = _query.split(" ").filter(e => e !== "and");

            let array:number[]|null|undefined = undefined;
            for(let i=0; i<4; i++) {
                if(options[i] === "-") continue;
                if(array === undefined) {
                    array = memory[options[i]];
                    continue;
                }
                const su = memory[options[i]];
                array = array.filter(e => su.includes(e));

                if(array.length === 0) {
                    array = null;
                    break;
                }
            }
            if(array === null) {
                result.push(0);
                continue;
            }
            let count = 0;
            const min:number = parseInt(options[4]);
            if(array === undefined) {
                scores.forEach(score => {
                    if(score >= min) count++;
                })
            } else {
                for(const index of array) {
                    if(scores[index] >= min) count++;
                }
            }
            result.push(count);
        }
        

        return result;
    }

    const info:string[] = ["java backend junior pizza 150","python frontend senior chicken 210","python frontend senior chicken 150","cpp backend senior pizza 260","java backend junior chicken 80","python backend senior chicken 50"];
    const query:string[] = ["java and backend and junior and pizza 100","python and frontend and senior and chicken 200","cpp and - and senior and pizza 250","- and backend and senior and - 150","- and - and - and chicken 100","- and - and - and - 150"];
    console.log(solution(info, query));
    
})();