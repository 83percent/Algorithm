(() => {
    function solution(id_list:string[], report:string[], k:number):number[] {
        const __report:string[][] = [...new Set(report)].map(element => element.split(" "));
        const map = new Map();
        const out = new Set();
        const temp = __report.reduce((acc:{[propName:string]:string[]}, [from, to]) => {
            if(acc[from] === undefined) acc[from] = [to];
            else acc[from].push(to);

            if(map.has(to)) map.set(to, map.get(to) + 1);
            else map.set(to, 1);

            return acc;
        }, {});

        for(let [id, count] of [...map]) {if(count >= k) out.add(id);}

        return id_list.reduce((acc:number[], id) => {
            let count = 0;
            temp[id]?.forEach(e => {
                if(out.has(e)) count++;
            })
            acc.push(count);
            return acc;
        }, [])
    }
    const id_list:string[] = ["muzi", "frodo", "apeach", "neo"];
    const report = ["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"];
    const k = 2;
    console.log(solution(id_list, report, k));
})();