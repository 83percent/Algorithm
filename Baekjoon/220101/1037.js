const input = [
    "14",
    "14 26456 2 28 13228 3307 7 23149 8 6614 46298 56 4 92596"
];

function lcm(a,b) {
    if(a < b) {
        let temp = a;
        b = a;
        a = temp;
    }
    const gcd = (a,b) => a%b === 0 ? b : gcd(b, a%b);
    return (a*b) / gcd(a,b);
    
}
console.log("--- : ", lcm(14, 26456))
function solution(input) {
    const numbers = input[1].split(" ").map(e => parseInt(e));
    
    let temp = numbers[0];
    for(let i=1; i<numbers.length; i++) {
        temp = lcm(temp, numbers[i]);
    }
    if(temp === 1) temp = 2;
    while(numbers.includes(temp)) {
        temp *= 2;
    }
    console.log(temp);
}

solution(input);