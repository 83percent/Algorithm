function solution(operations) {
    operations = operations.map(element => element.split(" "))
    const operation = new Operation();
    for(let i=0; i<operations.length; ++i) {
        switch(operations[i][0]) {
            case 'I' : {
                operation.add(Number(operations[i][1]));
                break;
            }
            case 'D' : {
                operation.minus(Number(operations[i][1]));
            }
            default : {}
        }
        console.log(operation.getArray());
    }
    return operation.getResult();
}
class Operation {
    constructor() {this.array = [];}
    add(number) {
        let pass = false;
        if(this.array.length == 0) this.array.push(number);
        else {
            for(let i=0; i<this.array.length; ++i) {
                if(this.array[i] < number) {
                    pass = true;
                    this.array.splice(i,0,number); // 비교한 수 앞에 추가 -> 큰 수가 앞으로옴 (내림차순)
                    break;
                }
            }
            if(!pass) this.array.push(number);
        }
    }
    minus(type) {
        switch(type) {
            case 1 : {
                // 최댓값 삭제
                this.array.shift();
                break;
            }
            case -1 : {
                // 최솟값 삭제
                this.array.pop();
                break;
            }
            default:{}
        }
    }
    getArray() {
        return this.array
    }
    getResult() {
        const max = this.array.length != 0 ? this.array[0] : 0;
        const min = this.array.length != 0 ? this.array[this.array.length-1] : 0;
        return [max,min]
    }
}
const operations = ["I -45", "I 653", "D 1", "I -642", "I 45", "I 97", "D 1", "D -1", "I 333"];
console.log(solution(operations));