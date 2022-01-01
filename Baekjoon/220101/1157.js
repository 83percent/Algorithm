let line = "z";
if(line.length === 1) console.log(line.toUpperCase());
else {
    const english = {};


    line = line.toUpperCase();
    for(let c of line) {
        if(english[c] === undefined) english[c] = 1;
        else english[c]++;
    }
    
    const sortArray = Object.entries(english).sort((a,b) => b[1] - a[1]);
    console.log(sortArray);
    console.log(sortArray[0][1] === sortArray[1][1] ? "?" : sortArray[0][0])
}
