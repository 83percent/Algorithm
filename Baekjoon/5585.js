const line = "380";

let cost = 1000 - parseInt(line);
const change = [500,100,50,10,5,1];
let counter = 0;
let loop = 0;
while(cost != 0) {
    counter += Math.floor(cost/change[loop]);
    cost = cost%change[loop];
    loop++;
}
console.log(counter);