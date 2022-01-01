const line = "314";
let result = "";
for(let c of line) {
    result += parseInt(c,8).toString(2)
}
console.log(result);