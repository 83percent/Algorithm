const input = [
    "5",
    "OOXXOXXOOO",
    "OOXXOOXXOO",
    "OXOXOXOXOXOXOX",
    "OOOOOOOOOO",
    "OOOOXOOOOXOOOOX",
]

let result= "";
for(let i=1; i<=Number(input[0]); ++i) {
    let counter = 0;
    let score = 0;
    input[i].split("").forEach(answer => {
        if(answer == "X") counter = 0;
        else {
            score += counter+1;
            counter++;
        }
    });
    result += score + "\n";
}
console.log(result);