function solution(clothes) {
    let result = 1;
    clothes = clothes.reduce((acc, value) => {
        if(acc[value[1]] === undefined) acc[value[1]] = 1; // 초기값이 1 인 이유는 '입지 않았을 때' 를 고려해야하기 때문에
        acc[value[1]]++;
        return acc;
    }, {});
    
    for(let index in clothes) {
        result *= clothes[index];
    }

    return result - 1; // 1을 빼준 이유는 전부 아무것도 입지 않은 경우는 뺴줘야 하기 때문에 (- 스파이는 하루에 최소 한 개의 의상은 입습니다.)
}

const clothes = [["yellowhat", "headgear"], ["bluesunglasses", "eyewear"], ["green_turban", "headgear"]];

console.log(solution(clothes));