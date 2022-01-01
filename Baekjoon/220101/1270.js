const input = [
    "4",
    "10 1 2 3 1 2 3 1 2 3 1",
    "5 1 1 1 2 2",
    "6 10 10 2 10 10 2",
    "6 1 1 1 2 2 2",
];

function solution(input) {
    for(let round=1; round < input.length; round++) {
        const line = input[round].trim().split(" ").map(e => parseInt(e));
        let list = {};
        for(let i=1; i<=line[0]; i++) {
            if(!list[line[i]]) list[line[i]] = 1;
            else list[line[i]]++;
        }
        let emp = undefined;
    
        const values = Object.values(list);
        if(values.length !== new Set(values).size) console.log("SYJKGW");
        else {
            for(let arm of Object.entries(list)) {
                if(!emp) emp = arm;
                else {
                    if(emp[1] > count) {
                        
                    }
                }
            }
        }
    }
}
solution(input);