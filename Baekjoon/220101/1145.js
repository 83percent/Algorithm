const input = "3 14 15 92 65";


// 최대 공약수 
const getGcd = (a,b) => a % b === 0 ? b : getGcd(b, a%b);

// 최소 공배수
const getLcm = (a,b) => (a*b) / getGcd(a,b);
// [0, 1, 2, 3, 4];
const numbers = input.split(" ").map(e => parseInt(e));

let min = Infinity;
for(let x=0; x<=4; x++) {
    for(let y=0; y<=4; y++) {
        if(x===y) continue;
        const init = numbers[x] >= numbers[y] ? getLcm(numbers[x], numbers[y]) : getLcm(numbers[y], numbers[x]);
        for(let z=0; z<5; z++) {
            if(z === x || z === y) continue;
            let temp = init >= numbers[z] ? getLcm(init, numbers[z]) : getLcm(numbers[z], init);
            if(temp < min) min = temp;
        }
    }
}
console.log(min);
