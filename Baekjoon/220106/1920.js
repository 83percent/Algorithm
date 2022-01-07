const input = [
    "2",
    "1 2",
    "2",
    "5 1"
];

function solution(input) {
    /* const array = input[1].split(" ").map(e => parseInt(e));
    for(let n of input[3].split(" ").map(e => parseInt(e))) {
        console.log(array.includes(n) ? 1 : 0)
    } */

    const array = input[1].split(" ").map(e => parseInt(e)).sort((a,b) => a-b);
    const search = (findElement) => {
        let start = 0,
            end = array.length-1;
        
        while(start <= end) {
            const mid = start + Math.floor((end - start) / 2);
            if(array[mid] === findElement) return 1;
            if(array[start] < findElement) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
        return 0;
    }
    for(let n of input[3].split(" ").map(e => parseInt(e))) {
        console.log(search(n));
    }
}

solution(input)