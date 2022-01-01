const line = "19 89 143 17 13";
/*
    @declear    N   운동하려는 시간
    @declear    m   최소 맥박 / 초기 맥박
    @declear    M   최대 맥박
    @declear    T   1분간 운동시 증가하는 맥박
    @declear    R   1분간 휴식시 감소하는 맥박

*/
function solution(line) {
    const [N, m, M, T, R] = line.split(" ").map(e => parseInt(e));
    
    // 운동을 할 수 없는 경우
    if(M-m < T || m+T > M) return -1;
    
    let time = 0; // 총 소요시간
    let X = m; // 초기 맥박
    let __N = 0;

    while(N !== __N) {
        time++;
        if(X + T <= M) {
            X = X+T;
            __N++;  
            continue;
        }

        if(X - R > m) {
            X = X-R;
        } else {
            X = m;
        }
    }
    return time;
}

console.log(solution(line));