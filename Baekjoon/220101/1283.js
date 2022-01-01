const input = [
"8",
"New window",
"New file",
"Copy",
"Undo",
"Format",
"Font",
"Cut",
"Paste"
];



class Key {
    constructor() {
        this.key = new Set();
    }
    setKey(value) {
        const _K = value.toUpperCase();
        if(this.key.has(_K)) return false;
        this.key.add(_K);
        return true;
    }
}

function solution(input) {
    const key = new Key();
    for(let i=1; i<input.length; i++) {
        const string = input[i].split(" ");
        let result = undefined;
        for(let j in string) {
            if(key.setKey(string[j][0])) {
                string[j] = `[${string[j][0]}]${string[j].slice(1)}`;
                result = string.join(" ");
                break;
            }
        }
        
        if(result !== undefined) {
            console.log(result);
            continue;
        }
        for(let x in string) {
            for(let y=1; y<string[x].length; y++) {
                if(key.setKey(string[x][y])) {
                    let temp = string[x].split("");
                    temp[y] = `[${string[x][y]}]`;
                    string[x] = temp.join("");
                    result = string.join(" ");
                    break;
                }
            }
            if(result !== undefined) break;
        }
        console.log(result ? result : input[i]);
    }
}

solution(input);