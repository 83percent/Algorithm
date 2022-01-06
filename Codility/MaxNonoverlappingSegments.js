/*
    겹치지 않는 Segment 로 만들 수 있는 조합의 최대 구성 수 구하기
    -> 끝나는 시간을 기준으로 오름차순 정리
    -> 하나의 세그먼트의 끝 기준으로 겹치는 부분의 수를 구하고
    -> 총 몇개의 세그먼트로 나뉘는지 확인
    -> 구성 수 = [1,2,3] 이면 3개 [1,6] 이면 2개 처럼 구성의 length 값을 의미함 

*/
function solution(A, B) {
    // write your code in JavaScript (Node.js 8.9.4)
    if(A.length < 2) return A.length;

    const set = new Set();
    let index = 0;
    while(index < A.length) {
        let segments= [index];
        const end  = B[index];
        for(++index; index<A.length; index++) {
            if(A[index] <= end) { // 다음 비교 대상이 현재 끝점 기준으로 시작지점 작거나 같으면 겹친다고 볼 수 있다.
                segments.push(index);
            } else break;
        }
        set.add(segments);
    }
    return set.size;
}