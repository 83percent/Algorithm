const input = [
    "3",
    "29",
    "38",
    "12",
    "57",
    "74",
    "40",
    "85",
    "61"
];

const maxArr = input.reduce((acc,value, index) => {
    if(acc[0] < value) {
        acc[0] = value;
        acc[1] = index+1;
    }
    return acc;
}, [0,0]);

console.log(`${maxArr[0]}\n${maxArr[1]}`)