const input = "5";

let result = "";
const T = Number(input);
for(let a=1; a<=T; ++a) {
    for(let b=T; b>0; --b) {
        if(b<=a) result += "*";
        else result += " "; 
    }
    result += "\n";
}
console.log(result);