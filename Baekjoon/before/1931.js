const input = [
    "11",
    "1 4",
    "0 6",
    "3 5",
    "5 7",
    "3 8",
    "5 9",
    "6 10",
    "8 11",
    "8 12",
    "12 14",
    "2 13"
];

const len = parseInt(input.shift());
const list = {};
const stack = [];
let counter = 0;
for(let i=0; i<len; ++i) {
    const info = input.shift().split(" ").map(e => parseInt(e));
    const spendTime = info[1] - info[0];
    if(spendTime != 0) {
        if(!list[spendTime]) list[spendTime] = [];
        list[spendTime].push(info);
    } else counter++;
}

for(const [key] of Object.entries(list)) {
    while(list[key].length > 0) {
        let time = list[key].shift();
        let pass = true;
        for(let [cS, cE] of stack) {
            let start = time[0];
            let end = time[1];
            if(start == cS || (start > cS && start < cE) || end > cS && end < cE) {
                pass = false;
                break;
            }
        }
        if(pass) stack.push(time);
    }
}
console.log(counter + stack.length);