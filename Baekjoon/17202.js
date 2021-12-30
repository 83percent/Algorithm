const input = ["74759336", "36195974"];
let result = "";
for(let i = 0; i < 8; i++) {
    result += (input[0][i] + input[1][i])
}
while(result.length > 2) {
    let temp = "";
    let v = 0;
    for(let i = 0; i < result.length - 1; i++) {
        v = parseInt(result[i]) + parseInt(result[i+1]);
        console.log(`${result[i]} + ${result[i+1]} = ${v}`)
        temp += v >= 10 ? v-10 : v;
    }
    result = temp;
}
console.log("결과 :", result);