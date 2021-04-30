/*
    Fibonacci 
        - 앞 두 수의 합
        0 1 1(0+1) 2(1+1) 3(1+2) 5(2+3) 8(3+5) 13(5+8)
        - 0,1 번째는 그대로 return 
*/
function fibonacci(num) {
    if(num<2) { return num; } // 0,1 번째 그대로 return
    else return fibonacci(num-2)+fibonacci(num-1); // 재귀 호출
}

// Test
console.log(fibonacci(30))