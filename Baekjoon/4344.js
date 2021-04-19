const input = [
    "5",
    "5 50 50 70 80 100",
    "7 100 95 90 80 70 60 50",
    "3 70 90 80",
    "3 70 90 81",
    "9 100 99 98 97 96 95 94 93 91"
]
let result = "";
for(let i=1; i<input.length; ++i) {
    const scores = input[i].split(" ");
    const len = scores.shift();
    let sum = 0;
    for(let e=0; e<len; ++e) {
        sum +=Number(scores[e]);
        
    }
    let avg = sum/len;
    let avgCounter = scores.filter(s => avg < s).length;
    result += ((avgCounter/len)*100).toFixed(3) + "%\n";
}
console.log(result);