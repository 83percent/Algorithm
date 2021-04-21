function solution(tickets) {
    let list = {};
    for(const ticket of tickets) {
        if(list[ticket[0]] == undefined) list[ticket[0]] = [];
        list[ticket[0]].push(ticket[1]);
    }
    for(const [key] of Object.entries(list)) {list[key].sort();}
    const len = tickets.length + 1;
    const S = new Stack("ICN", list);
    return S.getRoute(len);
}
class Stack {
    constructor(init, list) {
        this.stack = [init];
        this.list = list;
    }
    getRoute(size) {
        while(size != this.stack.length) {
            this.inStack();
        }
        return this.stack.reverse();
    }
    backTracking() {
        while(this.list[this.stack[0]] == undefined || this.list[this.stack[0]].length < 2) {
            this.list[this.stack[1]].push(this.stack.shift());
        }
    }
    inStack() {
        let nextInStackArray = this.list[this.stack[0]];
        console.log("==============================");
        if(!nextInStackArray||nextInStackArray.length == 0) {
            this.backTracking();
            nextInStackArray = this.list[this.stack[0]];
        }
        this.stack.unshift(this.list[this.stack[0]].shift());
    }
}

//const tickets = [[1,7], [1,4] , [1,2], [1,6]]
//const tickets = [["ICN", "JFK"], ["HND", "IAD"], ["JFK", "HND"]];
//const tickets = [["ICN","A"],["A","B"],["B","A"],["A","ICN"],["ICN","A"]];
const tickets = [["ICN","A"],["A","B"],["A","C"],["C","A"],["B","D"]];

console.log(solution(tickets));
