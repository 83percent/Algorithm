const line = "100";
const N = parseInt(line);
    let i = 0;
    const queue = Array.from(Array(N), () => ++i);
    while(queue.length != 1) {
        queue.shift();
        queue.push(queue.shift());
    }
    console.log(queue[0])