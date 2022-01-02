/*
    특정 숫자가 소수인지 판별하기
*/
function isPrime(n) {
    if(n <= 1) return false;
    if(n === 2) return true;
    if(n % 2 === 0) return false;
    const sqrt = Math.sqrt(n);
    for(let i=3; i<=sqrt(n); i+=2) {
        if(n % i === 0) return false;
    }
    return true;
}


/*
    에라토스테네스의 체
    1~n 까지의 소수 찾기
*/
function findPrime(n) {
    const number_array = Array.from({length : n}, () => true);
    number_array[0] = false;
    number_array[1] = false;

    let count = 0; // 소수의 갯수
    let prime_array = []; // 소수가 담긴 배열
    number_array.forEach((bool, number) => {
        if(bool) {
            for(let i=number*2; i<=n; i+=number) {
                number_array[i] = false;
            }
            prime_array.push(number);
            count++;
        }
    })
}