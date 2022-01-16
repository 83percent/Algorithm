(() => {
    function solution(dirs:string):number {
        const set = new Set();
        let position:number = 61,
            temp:number;

        for(const s of dirs) {
            switch(s) {
                case "U" : {
                    if(position - 11 > 0) {
                        temp = position;
                        position -= 11;
                        set.add(`${position}-${temp}`);
                    }
                    break;
                }
                case "D" : {
                    if(position + 11 <= 121) {
                        temp = position;
                        position += 11;
                        set.add(`${temp}-${position}`);
                    }
                    break;
                }
                case "R" : {
                    const max:number = Math.ceil(position / 11) * 11;
                    if(position + 1 <= max) {
                        temp = position;
                        position += 1;
                        set.add(`${temp}-${position}`);
                    }
                    break;
                }
                case "L" : {
                    const min:number = ((Math.ceil(position/ 11) - 1) * 11) + 1;
                    if(position - 1 >= min) {
                        temp = position;
                        position -= 1;
                        set.add(`${position}-${temp}`);
                    }
                    break;
                }
            }
        }
        return set.size;
    }

    const dirs:string = "LULLLLLLU";
    console.log(solution(dirs));
})();