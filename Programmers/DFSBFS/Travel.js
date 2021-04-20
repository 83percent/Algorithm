function solution(tickets) {
    const len = tickets.length;
    const G = new Graph();
    let S = new Stack();
    tickets.forEach(vectax => {
        G.in(vectax);
    });
    const graph = G.getGraph();
    while(len != S.getVisitedLen()) {

    }

}
class Stack {
    constructor() {
        this.stack = ["ICN"];
        this.visited = ["ICN"];    
    }
    inStack(vectax) {
        this.stack.unshift(vectax);
        if(this.visited.indexOf(vectax) == -1) this.visited.push(vectax);
        
    }
    
    getVisitedLen() {return this.visited.length}
}
class Graph {
    constructor() {
        this.graph = {
            ICN : []
        }
        this.last = null;
    }
    in(vectax) {
        if(this.graph[vectax[0]] == undefined) this.graph[vectax[0]] = [];
        this.graph[vectax[0]].push(vectax[1]);
        this.graph[vectax[0]].sort();
    }
    back() {
        
    }
    getGraph() {return this.graph;}
}


const tickets = [["ICN", "JFK"], ["HND", "IAD"], ["JFK", "HND"]];
//const tickets = [["ICN", "SFO"], ["ICN", "ATL"], ["SFO", "ATL"], ["ATL", "ICN"], ["ATL","SFO"]];

console.log(solution(tickets));
