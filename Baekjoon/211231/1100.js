const input = [
    ".F.F...F",
    "F...F.F.",
    "...F.F.F",
    "F.F...F.",
    ".F...F..",
    "F...F.F.",
    ".F.F.F.F",
    "..FF..F."
];

function solution(input) {
    let index = 0;
    let whiteSwitch = true;
    let count = 0;
    while(index < 8) {
        const line = input[index];
        for(let i=whiteSwitch? 0 : 1; i<8; i+=2) {
            if(line[i] === "F") count++;
        }
        whiteSwitch = !whiteSwitch;
        index++;
    }
    console.log(count);
}
solution(input);