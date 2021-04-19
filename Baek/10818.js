const input = [
    "5",
    "20 10 35 30 7"
];
const arr = input[1].split(" ").reduce((acc, value, index) => {
    value = parseInt(value);
    if(index === 0) {
        acc[0] = value;
        acc[1] = value;
    }
    if(acc[0] > value) acc[0] = value;
    if(acc[1] < value) acc[1] = value;
    return acc;
}, []);

console.log(`${arr[0]} ${arr[1]}`);