const t_cases = [
    [10, 4],
    [5, 3],
    [3, 2],
    [2, 1],
    [11, 5],
    [20, 8],
    [120, 30]
];

function solution(n) {
    const prime_array = Array.from({length : n+1}, () => true);
    const isPrime = (number) => {
        if(number % 2 === 0) return false;
        const sqrt = Math.sqrt(number);
        for(let i=0; i<=sqrt; i++) {
            if(number % prime_array[i] === 0) return false;
        }
        prime_array.push(number);
    }
    prime_array[0] = false;
    prime_array[1] = false;
    let result = 0;
    prime_array.forEach((bool, number) => {
        if(bool) {
            for(let i=number*2; i<=n; i+=number) {
                prime_array[i] = false;
            }
            result++;
        }
    })
    return result;
    
}

for(const t_case of t_cases) {
    const result = solution(t_case[0]);
    console.log(result, result === t_case[1]);
}
