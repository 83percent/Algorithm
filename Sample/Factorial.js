
/*
    재귀 호출 팩토리얼
*/
function factorial(n) {
    return n ? n * factorial(n-1) : 1;
}
/*
    여러개의 수를 factorial 호출 해야할 경우 메모리 효율과 시긴 지연이 발생하기에
    저장해두었다가 사용하면 좋을듯
*/
const saveFactorial = [0, 1];
function arrayFactorial(n) {
    if(n <= 0) return 0;
    if(saveFactorial.length - 1 >= n) {
        return saveFactorial[n];
    }
    for(let i = saveFactorial.length; i <= n; i++) {
        saveFactorial[i] = saveFactorial[i - 1] * i;
    }
    return saveFactorial[n];
}

const testCase = [3, 5, 4];
for(let test of testCase) {
    console.log(arrayFactorial(test));
}