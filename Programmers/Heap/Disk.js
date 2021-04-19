function solution(jobs) {
    jobs = jobs.filter((element) => element[1] != 0).sort((a,b) => {
        if(a[0] == b[0]) {
            return a[1]-b[1];
        } else return a[0]-b[0];
    });
    const len = jobs.length;
    const first = jobs.shift();
    let waitProc = [];
    let ms = first[0] + first[1];

    let time = first[1];
    console.log("----first of ms : ", ms);
    console.log("----first of time : ", time);
    while(jobs.length != 0 || waitProc.length != 0) {
        jobs = jobs.filter(element => {
            if(element[0] - ms <= 0) {waitProc.push(element[1] + Math.abs(element[0] - ms)); return false;} 
            else return true;
        });
        console.log("Now Proc : ", waitProc);
        const out = waitProc.sort((a,b) => a-b).shift();
        if(waitProc[0] != undefined) waitProc = waitProc.map(element => element+out);
        time += out;
        ms += ms;
    }
    console.log("================")
    console.log("Result : ", time)
    console.log("================")
    return time / len;
}

const jobs = [[0, 3], [1, 9], [2, 6]];  
console.log(solution(jobs));