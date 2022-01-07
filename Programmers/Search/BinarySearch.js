/**
 *  이분 탐색에 대한 코드
 */

const sortedArray = [];     // 정렬된 배열
const findElement = 0;      // 찾으려는 값

// 기본 이분 탐색 (오름차순)
function BinarySearch(sortedArray, findElement) {
    let start = 0,
        end = sortedArray.length - 1;
    while(start <= end) {
        const mid = start + Math.floor((end - start) / 2);
        if(sortedArray[mid] === findElement) return mid;
        
        if(sortedArray[mid] < findElement) start = mid + 1; // 찾으려는 값이 중간 기준으로 오른쪽에 위치
        else end = mid -1; // 찾으려는 값이 중간 기준으로 왼쪽으로 위치
    }

    return -1;
}

const nums = [10, 40, 50, 30, 60, 70, 80, 90, 20];
const sortedNums = nums.sort();
console.log(sortedNums);
console.log(BinarySearch(sortedNums, 30))