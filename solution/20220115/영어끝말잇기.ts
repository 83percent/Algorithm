(() => {
    function solution(n:number, words:string[]):number[] {
        const word_set = new Set();
        let loop:number = 1,
            count = 1,
            prev:string = words[0][0];

        for(let word of words) {
            if(word_set.has(word) || prev !== word[0]) {
                return [count, loop];
            }

            word_set.add(word);
            prev = word[word.length-1];
            if(count+1 > n) {
                count = 1;
                loop++;
            } else {
                count++;
            }
        }
        return [0,0];
    }

    const n = 3;
    const words = ["tank", "kick", "know", "wheel", "land", "dream", "mother", "robot", "tank"];

    console.log(solution(n, words));
})();