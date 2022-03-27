(() => {
    const input:string[]|number[] = [
        '5',
        '2 3 1 7 3',
        '4 1 9 6 8',
        '5 5 2 4 4',
        '6 5 2 6 7',
        '8 4 2 2 2'
    ];
    const num:number = parseInt(input.shift() as string);
    const temp:number[] = Array.from({length : num}, () => 0);
    
    const students = input.reduce((acc:number[][], s) => {
        acc.push(s.split(" ").map(e => parseInt(e)));
        return acc;
    }, []);
    for(let i=0; i<5; i++) {
        const grades:number[] = Array.from({length : 10}, () => 0);
        for(let student of students) grades[student[i]]++;
        for(let j=0; j<num; j++) {
            temp[j] += grades[students[j][i]];
        }
    }
    console.log(temp.indexOf(Math.max(...temp)) + 1);
})();