let line = "2143";

function solution(input) {
    input = input.split("").map(e => parseInt(e)).sort((a,b) => b-a);
    console.log(input.join(""));
    
}

console.log(solution(line));