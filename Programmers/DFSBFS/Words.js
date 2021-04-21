function solution(begin, target, words) {
    if(!words.includes(target)) return 0;
    words.push(begin)
    const strLen = begin.length;
    const wordsLen = words.length;
    const list = {};
    for(let x = 0; x<wordsLen; ++x) {
        for(let y = x+1; y<wordsLen; ++y) {
            if(canChange(words[x], words[y], strLen)) {
                if(list[words[x]] == undefined) list[words[x]] = [];
                if(list[words[y]] == undefined) list[words[y]] = [];
                list[words[x]].push(words[y]);
                list[words[y]].push(words[x]);
            }
        }
    }
    const Q = new Queue(target);
    let step = 0;
    let afterStr = "";
    while(Q.getQueue().length != 0) {
        size = Q.getQueue().length;
        for(let loop = 0; loop < size; ++loop) {
            let point = Q.dequeue();
            for(let i=0; i<list[point].length; ++i) {
                afterStr = list[point][i]
                if(afterStr == begin) break;
                Q.inqueue(afterStr);
            }
            if(afterStr == begin) break;
        }
        step++;
        if(afterStr == begin) break;
    }
    return step
}
function canChange(str1, str2, len) {
    let counter = 0;
    for(let i=0; i<len; ++i) {
        if(str1[i] != str2[i]) {
            counter++;
            if(counter == 2) break;
        }
    }
    return counter == 2 ? false : true;
}
class Queue {
    constructor(init) {
        this.queue = [init];
        this.visited = [init];
    }
    dequeue() {
        return this.queue.shift();
    }
    inqueue(vectax) {
        if(this.visited.indexOf(vectax) != -1) return;
        this.visited.push(vectax);
        this.queue.push(vectax);
    }
    getQueue() {return this.queue};
}
console.log(solution("hit","cog",["hot", "dot", "dog", "lot", "log", "cog"]),4)
console.log(solution("hit","cog",["hot", "dot", "dog", "lot", "log"]),0)