const line = "3 2 1";

const costs = line.split(" ").map(e => parseInt(e));
console.log(costs[1] >= costs[2] ? -1 : Math.floor(costs[0] / (costs[2] - costs[1])) + 1);