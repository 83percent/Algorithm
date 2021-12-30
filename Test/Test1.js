// 문제 1
/*
문제 설명
대학생 철수는 새 학기를 맞아 대학 수업 시간표를 만들려고 합니다. 철수는 이번 학기에 총 5가지 과목을 듣고자 하며, 각 과목은 4개의 분반으로 나누어져 있습니다. 즉 1번 과목은 ‘A’분반, ‘B’분반, ‘C’분반, ‘D’분반으로 나누어져 있고, 2,3,4,5번 과목 또한 각각 ‘A’분반, ‘B’분반, ‘C’분반, ‘D’분반으로 나누어져 있습니다. 과목별로 각 분반은 서로 다른 교수님이 강의 하므로, 각 분반의 수업 시간은 서로 다를 수도 있고, 겹칠 수도 있습니다.
철수는 5가지 과목을 모두 들을 수 있도록 각 과목마다 4개의 분반 중 하나씩을 선택하여 시간표를 만들려 합니다.

예를 들어 5개의 과목 분반들의 수업 시간이 서로 다른 과목 분반들의 수업 시간과 전혀 겹치지 않는다면,
철수가 만들 수 있는 시간표는 총 1024(=4 x 4 x 4 x 4 x 4)가지입니다. 하지만 어떤 과목의 분반이 다른 과목의 분반과 수업 시간이 서로 겹치게 된다면 만들 수 있는 시간표의 가짓수는 줄어들게 됩니다.

철수가 만들 수 있는 올바른 시간표는 몇 개인지를 구하려고 합니다. 올바른 시간표란, 듣고자 하는 5개의 과목 중 어떤 과목도 다른 과목과 수업 시간이 겹치지 않는 시간표를 말합니다.

분반의 수업 시작 시각을 과목별로 담은 2차원 문자열 배열 schedule이 매개변수로 주어집니다. 만들 수 있는 올바른 시간표의 개수를 return 하도록 solution 함수를 완성해주세요.

제한사항
schedule의 행의 길이 = 5 (들어야 하는 과목 수)
schedule의 열의 길이 = 4 (과목별 분반(A, B, C, D)의 개수)
schedule의 원소는 Day HH:MM 혹은 Day HH:MM Day HH:MM의 형태로 주어집니다.

Day는 요일을 나타내는 문자열입니다. 아래 표에 해당하는 값으로만 주어집니다.
Day	뜻
MO	월요일
TU	화요일
WE	수요일
TH	목요일
FR	금요일
HH는 시간을 나타내는 정수입니다. 9시는 "Day 09:MM"의 형태로 주어집니다.
9 ≤ HH ≤ 18
MM는 분을 나타내는 정수입니다. 0분은 "Day HH:00"의 형태로 주어집니다.
MM은 00이거나 30입니다.
schedule의 원소가 Day HH:MM과 같은 형태인 경우에는 수업이 연속으로 3시간 동안 진행됩니다.
예를 들어, schedule의 원소가 "TU 13:30"인 경우에는 화요일 13시 30분부터 16시 30분까지 진행되는 수업이라는 뜻입니다.
schedule의 원소가 Day HH:MM Day HH:MM과 같은 형태인 경우에는 수업이 1시간 30분 동안 각각 다른 요일에 두 번 진행됩니다.
예를 들어, schedule의 원소가 "TU 13:30 FR 14:30"일 경우는 화요일 13시 30분부터 15시까지, 그리고 금요일 14시 30분부터 16시까지 진행되는 수업이라는 뜻입니다.
Day HH:MM Day HH:MM에서 첫 번째 Day와 두 번째 Day는 다릅니다.
Day HH:MM Day HH:MM에서 첫 번째 Day와 두 번째 Day는 시간순으로 오지 않을 수 있습니다.
예를 들어 "FR 14:30 MO 18:30"와 같이, 금요일이 월요일보다 앞에 오는 입력도 있을 수 있습니다. 물론 "FR 14:30 MO 18:30"과 "MO 18:30 FR 14:30"는 같은 의미의 입력입니다.
Day와 HH:MM는 하나의 공백으로 구분되어 있습니다.
모든 과목 분반의 수업 시간은 1주일에 3시간입니다. 1주일에 한 번, 3시간 연속으로 진행되거나 1주일에 두 번, 1시간 30분씩 진행됩니다.

수업이 끝나는 시각과 다른 수업이 시작하는 시각이 같더라도 수업 시간이 겹치지 않는 것으로 간주합니다.

한 과목 분반의 수업 시작 시간이 같을 수도 있습니다.

예를 들어, 한 과목의 4개의 분반이 모두 같은 시각에 시작할 수도 있습니다.

입출력 예
schedule	[["MO 12:00 WE 14:30", "MO 12:00", "MO 15:00", "MO 18:00"], ["TU 09:00", "TU 10:00", "TU 15:00", "TU 18:00"], ["WE 09:00", "WE 12:00", "WE 15:00", "WE 18:00"], ["TH 09:30", "TH 11:30", "TH 15:00", "TH 18:00"], ["FR 15:00", "FR 15:00", "FR 15:00", "FR 15:00"]]
result      896


*/
function solution(schedule) {
    function getObject() {
        return new Object({
            MO : [],
            TU : [],
            TH : [],
            WE : [],
            FR : []
        })
    }
    let count = 0;
    function search(now, index) {
        if(index === 5) return;
        
        for(let s of schedule[index]) {
            s = s.split(" ");
            let _copy = JSON.parse(JSON.stringify(now));
            let isInput = true;
            for(let i = 0; i < s.length; i+=2) {
                start_t = parseInt(s[i+1].replace(':',''));
                end_t = s.length === 2 ? start_t + 300 : start_t + 130;

                // [start_t, end_t] 추가하려고 함
                // 겹치는 지 확인하고 겹치면 넣으면 안됨
                if(_copy[s[i]].length === 0) _copy[s[i]].push([start_t, end_t]);
                else {
                    // 수업 시간을 모두 비교
                    for(let index = 0; index < _copy[s[i]].length; index++) {
                        const [a_start_t, a_end_t] = _copy[s[i]][index];      
                        if(a_start_t === start_t || a_end_t === end_t) {isInput = false; break;}
                        if(start_t < a_start_t && a_start_t < end_t) {isInput = false; break;}
                        if(a_end_t < end_t && start_t < a_end_t) {isInput = false; break;}
                    }
                    if(isInput === true) _copy[s[i]].push([start_t, end_t]);
                }
            }
            if(isInput) {
                if(index === 4) count++;
                console.log(_copy)
                search(_copy, index+1)
            }

        }
    } // seach

    search(getObject() , 0)
    return count;
}


console.log("================================")
const result = 896;
const ref = [["MO 12:00 WE 14:30", "MO 12:00", "MO 15:00", "MO 18:00"], ["TU 09:00", "TU 10:00", "TU 15:00", "TU 18:00"], ["WE 09:00", "WE 12:00", "WE 15:00", "WE 18:00"], ["TH 09:30", "TH 11:30", "TH 15:00", "TH 18:00"], ["FR 15:00", "FR 15:00", "FR 15:00", "FR 15:00"]];
const _return = solution(ref);
console.log(`결과 : ${_return}`, _return == result);
console.log("================================")