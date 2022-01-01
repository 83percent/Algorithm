let line = "123 45";

line = line.split(" ");

if(line.includes("0")) console.log("0");
else {
    let result = 0;
    for(let A of line[0]) {
        for(let B of line[1]) {
            result += parseInt(A) * parseInt(B);
        }
    }
    console.log(result)
}