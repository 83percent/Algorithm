

class Combination {
    constructor(numbers) {
        this.numbers = numbers;
    }
    getList() {
        const size = this.numbers.length;
        
    }
}
function getCombinationCount(N, M) {
    function factorial(n) {
        return n ? n * factorial(n-1) : 1;
    }
    return factorial(N) / (factorial(M) * factorial(N - M));
}

const numbers = [1,3,7,5];

console.log(getCombinationCount(10, 3));