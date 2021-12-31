const line = "ali ja sam i jucer jeo";

const words = line.split(" ");
const none = ['i', 'pa', 'te', 'ni', 'niti', 'a', 'ali', 'nego', 'no', 'ili'];
console.log(short = words.reduce((acc, str, index) => {
    
    if(!none.includes(str) || index == 0) {
        acc += String.fromCharCode(str[0].charCodeAt(0)-32);
        return acc;
    } else return acc
    
},""));