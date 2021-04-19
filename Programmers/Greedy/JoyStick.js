function solution(name) {
    let move = 0;
    let position = 65; // 'A'
    name = name.split("").map(element => element.charCodeAt(0));
    const insert = Array.from(name, ()=> 65);
    
    return move;
}

const name = "JEROEN";
console.log(solution(name));