const input = [
    "3",
    "c.user.mike.programs",
    "c.user.nike.programs",
    "c.user.rice.programs"
];

function solution(input) {
    const T = parseInt(input[0]);
    let result = undefined;
    let tempArray;
    for(let round = 1; round <= T; round++) {
        if(result === undefined) result = input[round].split("");
        else {
            tempArray = input[round].split("");
            let len;
            if(result.length >= tempArray.length) len = result.length;
            for(let i=0; i<len; i++) {
                if(result[i] === "?") continue; // 효율성
                if(result[i] !== tempArray[i]) result[i] = "?";
            }
        }
    }
    console.log(result.join(""));
}

solution(input);