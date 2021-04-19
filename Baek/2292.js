const line = "1";

const value = parseInt(line);
let index = 1;
let n = 1;
while(n < value) {
    n += (index)*6;
    index++;
    console.log(n);
}
console.log(index);