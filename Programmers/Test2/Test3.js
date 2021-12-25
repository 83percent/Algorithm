function solution(numbers, hand) {
    numbers = numbers.map(n => {
        if(n === 0) return 11;
        else return n;
    });
    
    const left = [1,4,7];
    const right = [3,6,9];
    const position = [10,12];
    
    
    const getShort = ((position, number, posHand) => {
        let short = 0;
        let pos;
        while(true) {
            pos = position - number;
            if(Math.abs(pos) <= 1) break;
            pos > 0 ? position -= 3 : position += 3;
            short++;
        }
        
        return short + Math.abs(pos);
    });
    
    return numbers.reduce((acc, number) => {
        let _r = undefined;
        if(left.includes(number)) _r = "L";
        else if(right.includes(number)) _r = "R"
        else {
            const gap = getShort(position[0], number, "left") - getShort(position[1], number, "right");
            if(gap === 0) hand === "left" ? _r = "L" : _r = "R";
            else if(gap > 0) _r = "R";
            else _r = "L";
            
        }
        console.log(number, _r);
        _r === "L" ? position[0] = number : position[1] = number;
        acc += _r;
        return acc;
    }, "");
}
const result = solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], "left")
console.log(result, "LRLLRRLLLRR", "LRLLRRLLLRR" === result);