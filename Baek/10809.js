const line = "baekjoon";

let arr = [];
let result = "";
for(let i=0; i<26; ++i) {
    arr[i] = -1;
}
for(let i =0; i<line.length; ++i) {
    let value = arr[line[i].charCodeAt(0)-97];
    if(value == -1) arr[line[i].charCodeAt(0)-97] = i;
}
arr.forEach(element => {
    result += element + " ";
})
console.log(result);