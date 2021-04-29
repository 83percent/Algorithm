class Stack {
    constructor(init) {
        this.stack = [init];
        this.visited = [init];
    }
    inStack(vectax) {
        if(this.visited.includes(vectax)) return;
        else {
            this.visited.push(vectax);
            this.stack.push(vectax);
        }
    }
    outStack(vectax) {
        return this.stack.pop();
    }
}