const input = [
    "3",
    "0 0 13 40 0 37",
    "0 0 3 0 7 4",
    "1 1 1 1 1 5"
];

const T = parseInt(input.shift());
for(let t=0; t<T; ++t) {
    let w, h, l;
    let info = input.shift().split(" ").map(e => parseInt(e));
    w = Math.abs(info[0]) + Math.abs(info[3]);
    h = Math.abs(info[1]) + Math.abs(info[4]);
    l = Math.abs(info[2]) + Math.abs(info[5]);
    console.log(`두 점 사이의 거리 : ${(w*w)+(h*h)}, 두 반지름의 합 : ${l}`)
}