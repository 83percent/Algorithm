function solution(participant, completion) {
    /*
        Array.reduce(function(accumulator, currentValue, currentIndex, array), initialValue);
        @params callback(accumulator, currentValue, currentIndex, array)
                @params accumulator : 누적 값(callback의 return 이 accumulator에 저장)
                @params currentValue : 처리할 현재 요소
                @params currentIndex : 처리할 인덱스 ( 호출한 배열에서의 인덱스 )
                @params array : 호출한 배열
        @prams  initialValue : 누산될 초기 값 (accumulator 의 초기값)

        @return 호출한 array의 마지막 인덱스에서의 return 된 값
    */
    completion = completion.reduce((accumlator, currentValue) =>  {
        accumlator[currentValue] = accumlator[currentValue] ? accumlator[currentValue] + 1 : 1;
        return accumlator;
    }, {});

    return participant.find((element) => {
        if(completion[element]) completion[element] -= 1;
        else return true;
    });
}

const participant = ["marina", "josipa", "nikola", "vinko", "filipa"];
const completion = ["josipa", "filipa", "marina", "nikola"];

console.log(solution(participant, completion));