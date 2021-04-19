function solution(bridge_length, weight, truck_weights) {
    const resultState = [];
    const finishState = [...truck_weights];
    console.log("목표 상태 = ", finishState);
    let time = 0;
    let index = 0;

    const bridge = new Bridge(weight, bridge_length);

    while(JSON.stringify(resultState) != JSON.stringify(finishState)) {
        time++;
        const outFromBridge = bridge.dequeue();
        if(outFromBridge != 0) resultState.push(outFromBridge);
        if(bridge.enqueue(truck_weights[index])) index++;
        console.log(resultState)
    }
    return time;
}

/*
    1. 다리에서는 출력, 입력 순이다.
*/

class Bridge {
    constructor(weight, bridge_length) {
        this.bridge = Array.from({length: bridge_length}, () => 0);
        this.weight = 0;
        this.max_weight = weight;
    }
    enqueue(truck) {
        // 입력
        if(this.weight + truck > this.max_weight) {
            this.bridge.unshift(0);
            return false;
        } else {
            this.bridge.unshift(truck); // push의 return 은 배열의 길이 이다. (return array.length)
            this.weight += truck;
            return true;
        }
    }
    dequeue() {
        // 출력
        const out = this.bridge.pop();
        if(out != 0) this.weight -= out;
        return out;
    }
    getBridge() {return this.bridge;}
}

const bridge_length = 100;
const weight = 100;
const truck_weights = [10,10,10,10,10,10,10,10,10,10];

console.log(solution(bridge_length, weight, truck_weights));