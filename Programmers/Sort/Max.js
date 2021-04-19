function solution(numbers) {
    let list = [];
    numbers = numbers.reduce((acc, number) => {
        const a = Array.from(String(number));
        if(acc[String(a[0])] === undefined) acc[String(a[0])] = [];
        acc[String(a[0])].push([number, ...getCompareNumber(number)]);
        return acc;
    }, {});
    for(const cate in numbers) {
        numbers[cate].sort((a,b) => {
            if(b[1] - a[1] != 0) return b[1] - a[1];
            else {
                const __d = Array.from(String(a[1]));
                return __d[0] - __d[Math.min(a[2],b[2])-1] < 0 ? a[2]- b[2] : b[2] - a[2];
            }
        });
        console.log(numbers[cate]);
        numbers[cate] = numbers[cate].map(element => {
            return element[0]
        });
        list.push(numbers[cate]);
        console.log("---------------------------")
        console.log(numbers[cate]);
    }
    list = list.reverse().map(element => element.join('')).join('');
    if(list.split('')[0] == "0") return 0;
    return list;
    
}
function getCompareNumber(number) {
    let strNumber = String(number)
    const str = Array.from(strNumber)[0];
    while(strNumber.length != 5) {strNumber += str}

    return [Number(strNumber), String(number).length];
}
const numbers = [0,0,0];
console.log(solution(numbers));