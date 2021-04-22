function solution(s)
{
    s = s.split("");
    let index = 1;
    while(s.length != 0 && s.length > index) {
        console.log(s, `index ${index}`);
        
        console.log(`${s[index-1]} == ${s[index]}`);
        if(s[index-1] == s[index]) {
            console.log('before',s)
            console.log(s.splice(index-1,2));
            console.log('after',s)
            index--;
        } else index++;
        
    }
    return s.length == 0 ? 1 : 0;
}
const s = "baabaa"
console.log(solution(s), 1);