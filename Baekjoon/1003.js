const input = [
    "3",
    "0",
    "1",
    "3"
];
class Fibonacci {
    constructor() {
        this.result = [0,0];
    }
    loop(n) {
        if (n == 0) return this.result[0]++;
        else if (n == 1) return this.result[1]++;
        else return this.loop(n-1) + this.loop(n-2);
    }
    getResult() {
        return `${this.result[0]} ${this.result[1]}`;
    }
}
const info = parseInt(input.shift());

for(const element of input) {
    const fibonacci = new Fibonacci();
    fibonacci.loop(parseInt(element));
    console.log(fibonacci.getResult());
}
