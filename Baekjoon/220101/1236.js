const input = [
    "5 8",
    "....XXXX",
    "........",
    "XX.X.XX.",
    "........",
    "........"
];

const [h, w] = input.shift().split(" ").map(e => parseInt(e));
const w_checking = (() => {
    const result = Array.from({length : w}, () => false);
    for(let i=0; i<w; i++) {
        for(let j=0; j<h; j++) {
            if(input[j][i] === "X") {
                result[i] = true;
                break;
            }
        }
    }
    return result.filter(e => !e).length;
})();

const h_checking = (() => {
    const result = Array.from({length : h}, () => false);
    for(let i=0; i<h; i++) {
        if(input[i].includes("X")) result[i] = true;
    }
    return result.filter(e => !e).length;
})();
console.log(w_checking >= h_checking ? w_checking : h_checking);