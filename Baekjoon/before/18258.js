class Queue {
    constructor() {this.queue = []}
    push(value) {this.queue.push(value)}
    pop() {return !this.empty() ? this.queue.shift() : -1}
    front() {return this.queue[0]}
    back() {return this.queue[this.size()-1]}
    size() {return this.queue.length}
    empty() {return this.size() < 1 ? 1 : 0}
}

const input = [
    "15",
    "push 1",
    "push 2",
    "front",
    "back",
    "size",
    "empty",
    "pop",
    "pop",
    "pop",
    "size",
    "empty",
    "pop",
    "push 3",
    "empty",
    "front"
];
input.shift();
const commands = input.map(element => element.split(' '));
let result = "";
const queue = new Queue();
for(const command of commands) {
    switch(command[0]) {
        case 'push' : {queue.push(parseInt(command[1])); break;}
        case 'pop' : {result += queue.pop() + "\n"; break;}
        case 'front' : {result += queue.front() + "\n"; break;}
        case 'back' : {result += queue.back() + "\n"; break;}
        case 'size' : {result += queue.size() + "\n"; break;}
        case 'empty' : {result += queue.empty() + "\n"; break;}
        default : {}
    }
}
console.log(result);