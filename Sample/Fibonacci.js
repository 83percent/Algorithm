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


function fibonacci(n) {
    // TODO: 여기에 코드를 작성합니다.
   //일단 초기 배열이 [0, 1]에서 시작하여 배열의 요소를 누적해 나가는 방법
   //그리고 이미 구해놓은 것은 배열의 요소로 저장해놓기..!!! 그래야 런타임이 초과되지 않는다
  
   let newArr = [0, 1]; //0번째 1번째 요소는 고정시켜두고 
   
    let fib = (n) => { //함수 한개를 선언해주고
      if (newArr[n] !== undefined){ 
        return newArr[n]; //이미 있는 건 그대로 리턴
      }
      newArr[n] = fib(n - 1) + fib(n - 2); //없는 건 새로 만들어서 저장!!!*****
      return newArr[n];
    };
    
    return fib(n); 
  }