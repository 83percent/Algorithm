const input = [
    "3",
    "0",
    "0",
    "0",
    "10",
    "1",
    "2",
    "4",
    "8",
    "16",
    "32",
    "64",
    "128",
    "256",
    "-512",
    "6",
    "9223372036854775807",
    "9223372036854775806",
    "9223372036854775805",
    "-9223372036854775807",
    "-9223372036854775806",
    "-9223372036854775804"
];
let index = 0;
for(let i=0; i<3; i++) {
    const N = parseInt(input[index]);
    index++;
    let sum = 0;
    let round = N + index;
    for(index; index<round; index++) {
        console.log("number : ",input[index]);
        sum += parseInt(input[index])
    }
    console.log(sum);
}