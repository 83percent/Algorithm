const input = [
    "2",
    "1 2 3 5 6 7 4 8 9",
    "3 4 5 6 1 2 4 7 8",
    "7 5 8 3 4 2 1 9 6",
    "1 2 3 5 6 7 4 8 9",
    "3 4 5 6 1 2 4 7 8",
    "7 5 8 3 4 2 1 9 6",
    "1 2 3 5 6 7 4 8 9",
    "3 4 5 6 1 2 4 7 8",
    "7 5 8 3 4 2 1 9 6",
    "",
    "3 5 7 9 6 4 2 8 1",
    "4 6 8 1 2 3 5 7 9",
    "9 1 2 5 8 7 4 6 3",
    "6 3 1 7 9 5 8 4 2",
    "7 2 4 3 1 8 6 9 5",
    "8 9 5 2 4 6 1 3 7",
    "1 7 6 4 5 9 3 2 8",
    "5 8 3 6 7 2 9 1 4",
    "2 4 9 8 3 1 7 5 6",
];

const info = parseInt(input.shift());
for(let i=0; i<info; ++i) {
    let result = "CORRECT";
    let map = [];
    for(let x=0; x<9; ++x) {
        map.push(input.shift().split(" ").map(e => parseInt(e)));
    }
    for(let point=0; point<9; ++point) {
        let w = 0;
        let h = 0;
        for(let pos=0; pos<9; ++pos) {
            w += map[point][pos]
            h += map[pos][point]
        }
        if(w != 45 || h != 45) {
            result = "INCORRECT";
            break;
        }
    }
    
    console.log(`Case ${i+1}: ${result}`)
    if(input.length != 0) input.shift();
}