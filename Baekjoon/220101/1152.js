const line = " ";

console.log(line);
console.log(line.trim().split(" ").reduce((acc, e) => {
    console.log(`"${e}"`)
    if(e !== "") acc++;
    return acc;
}, 0));