(() => {
    function solution(msg:string):number[] {
        const result:number[] = [];
        let save = 27;
        const dictionary = new Map();
        console.log(String('A'.charCodeAt(0) - 64));

        for(let i=0; i<msg.length; i++) {
            let word = msg[i];
            let code = word.charCodeAt(0) - 64;
            if(!dictionary.has(word)) {dictionary.set(word, code);}
            for(i; i<msg.length; i++) {
                word += msg[i+1];
                if(!dictionary.has(word)) {
                    dictionary.set(word, save);
                    save++;
                    break;
                } else {
                    code = dictionary.get(word);
                }
            }
            result.push(code);
        }

        return result;
    }
    const msg = "ABABABABABABABAB";
    console.log(solution(msg));
})();