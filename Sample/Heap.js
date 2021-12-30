/*
    우선 순위 Queue -> Heap

    - MaxHeap 
    - MinHeap

    - swap Max -> Min, Min -< Max
*/
class MaxHeap { // 최대힙 : root 가 최대값임
    constructor() {this.heap = [0];}
    
    insert(value) {
        this.heap.push(value);
        
        if(this.heap.length > 2) {
            // Heap 배열 유지
            // 최대 힙 (부모 노드가 가장 큰 값)
            let cursor = this.heap.length - 1; // 마지막 인덱스

            while(cursor > 1) { // 자기 위치가 root 면 멈춤
                const parentIndex = Math.floor(cursor / 2);
                if(this.heap[cursor] > this.heap[parentIndex]) {
                    const temp = this.heap[parentIndex];
                    this.heap[parentIndex] = value;
                    this.heap[cursor] = temp;

                    cursor = parentIndex;
                } else break;
            }
        }

        return this.heap;
        
    }
    remove() {
        // root 를 추출 하고 Heap을 유지
        if(this.heap.length === 2) return this.heap.pop(); // 루트 하나 밖에 없어서 제거 후 반환
        const root = this.heap[1];
        console.log("추출 할 최대힙의 값 : ", root);
        const value = this.heap.pop();
        this.heap[1] = value; // 가장 마지막 값을 루트로 전환

        console.log("추출 후 Heap : ", this.heap);

        let cursor = 1; // root Index
        while(cursor < this.heap.length) { // cursor 가 Heap의 마지막 까지 도달하면 정지
            const leftIndex = cursor * 2;
            if(this.heap[leftIndex] === undefined) break;
            else if (value < this.heap[leftIndex]) {
                this.heap[cursor] = this.heap[leftIndex];
                this.heap[leftIndex] = value;
                cursor = leftIndex;
                continue;
            }
            
            const rightIndex = leftIndex + 1;
            if(this.heap[rightIndex] === undefined) break;
            else if(value < this.heap[rightIndex]) {
                this.heap[cursor] = this.heap[rightIndex];
                this.heap[rightIndex] = value;
                cursor = rightIndex;
                continue;
            }
        }
        return root;
    }
    getHeap() {return this.heap}
}

class MinHeap { // 최소 힙 : root 가 가장 작은 값
    constructor() {this.heap = [0]}
    insert(value) {
        this.heap.push(value);
        if(this.heap.length > 2) {
            let cursor = this.heap.length - 1;

            while(cursor > 1) { // 자기 위치가 root 면 멈춤
                let parentIndex = Math.floor(cursor / 2);
                if(value < this.heap[parentIndex]) {
                    this.heap[cursor] = this.heap[parentIndex];
                    this.heap[parentIndex] = value;

                    cursor = parentIndex;
                } else break;
            }
        }
        return this.heap;
    }
    remove() { // root(최솟값 추출)
        if(this.heap.length === 2) return this.heap.pop();
        const root = this.heap[1];

        let cursor = 1;
        const value = this.heap.pop();
        this.heap[1] = value;

        while(cursor < this.heap.length) {
            const leftIndex = cursor * 2;
            if(this.heap[leftIndex] === undefined) break;
            else if(value > this.heap[leftIndex]) {
                this.heap[cursor] = this.heap[leftIndex];
                this.heap[leftIndex] = value;

                cursor = leftIndex;
                continue;
            }

            const rightIndex = leftIndex + 1;
            if(this.heap[rightIndex] === undefined) break;
            else if(value > this.heap[rightIndex]) {
                this.heap[cursor] = this.heap[rightIndex];
                this.heap[rightIndex] = value;

                cursor = rightIndex;
                continue;
            }
        }

        return root;
    }
    getHeap() {return this.heap};
}

const min = new MinHeap();

console.log(min.insert(8));
console.log(min.insert(3));
console.log(min.insert(5));
console.log(min.insert(2));
console.log(min.insert(3));
console.log(min.insert(1));

console.log("최소 힙 : ",min.getHeap());
console.log("==============================")
const minHeapArray = min.getHeap();
// '최대 힙'을 '최소 힙' 으로 전환 (반대도 가능)
const max = new MaxHeap();
for(let i = 1; i < minHeapArray.length; i++) {
    console.log(max.insert(minHeapArray[i]));
}
console.log("최대 힙 : ", max.getHeap());