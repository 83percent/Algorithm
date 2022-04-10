(() => {
    let input:string[]|number[][] = [
        '3',
        '26 40 83',
        '49 60 57',
        '13 89 99'
    ];
    const num:number = parseInt(input.shift() as string);
    const infos = input.reduce((acc:number[][], line) => {
        const arr = line.split(" ").map((e, i) => parseInt(e));
        const minValue = Math.min(...arr);
        const minIndex = arr.indexOf(minValue);
        acc.push([
            minIndex+1,
            ...arr.map(e => e - minValue),
            minValue
        ]);
        return acc;
    }, []);
    console.log(infos);
    let before = [-1, Infinity];
    let sum = 0;
    let cnt = 0;
    for(let info of infos) {
        const [index, gap1, gap2, gap3, minPrice] = info;
        if(index !== before[0]) {
            sum += minPrice;
        } else {
            let after = [index, sum += minPrice];
            for(let i = cnt; i>=0; i--) {
                
            }
        }
        cnt++;
    }
    console.log(sum);
})();