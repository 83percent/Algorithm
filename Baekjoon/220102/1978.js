const input = [
    "1",
    "101"
];

function solution(input) {
    if(input[0] == 0) return console.log(0)
    const numbers = input[1].split(" ").map(e => parseInt(e));
    const isPrime = (number) => {
        if(number <= 1) return false;
        if(number === 2) return true;
        if(number % 2 === 0) return false;
        const sqrt = Math.sqrt(number);
        for(let i=3; i<=sqrt; i+=2) {
            if(number % i === 0) return false;
        }
        return true;
    }

    console.log(
        numbers.reduce((count, number) => {
            if(isPrime(number)) count++;
            return count;
        }, 0)
    );
}

solution(input)