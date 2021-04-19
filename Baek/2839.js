const line = "6";

let value = parseInt(line);

let num = -1;
for(let i=Math.floor(value/5); i > 0; --i) {
    if((value - (5*i)) % 3 == 0) {
        num = i + (value - (5*i))/3;
        break;
    }
}
if(num == -1 && value%3 == 0) num = value/3;
console.log(num)