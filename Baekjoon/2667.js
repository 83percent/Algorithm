const input = [
    "7",
    "0110100",
    "0110101",
    "1110101",
    "0000111",
    "0100000",
    "0111110",
    "0111000"
]

const size = parseInt(input.shift());

let building = [];

for(let x=0; x<size; ++x) {
    for(let y=0; y<size; ++y) {
        console.log(input[x][y]);
        if(input[x][y] === '1') {
            let queue = [`${x}-${y}`];
            
            while(queue.length != 0) {
                //
            }
        }
    }
}