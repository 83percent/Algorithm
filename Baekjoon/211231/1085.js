const input = [
    "161 181 762 375"
]

function solution(input) {
    const [x, y, w, h] = input[0].split(" ").map(e => parseInt(e));
    
    let min = Infinity;
    if(h-y < y && min > h-y) min = h-y;
    else if(min > y) min = y;

    if(w-x < x && min > w-x) min = w-x;
    else if(min > x) min = x;

    console.log(min)
}

solution(input);