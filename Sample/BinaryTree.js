/*
    기본 구조
    const node = new Node([init], 0) -> 깊이 1부터 샐거임, 0부터 샐거면 -1
*/

class Node {
    constructor(data, dept) {
        this.data = data;
        this.left = null;
        this.right = null;
        
        this.dept = ++dept; // 생성 될 때 마다 부모보다 1증가
    }
    /*
        노드 생성 코드
    */
    insert(data) {
        // 중복 불가
        if(data == this.data) return;
        data < this.data ? this.toLeft(data) : this.toRight(data);
    }
    toLeft(data) {
        this.left ? this.left.insert(data) : this.left = new Node(data)
    }
    toRight(data) {
        this.right ? this.right.insert(data) : this.right = new Node(data)
    }

    /*
        노드 찾기 코드
        null 반환 시  없는 것임
    */
    contains(data) {
        if(this.data == data) return this; // 해당 노드를 반환 or return this.data 와 같이 특정 정보만 반환 가능
        return data < this.data ? this.findLeft(data) : this.findRight(data);
    }
    findLeft(data) {
        return this.left ? this.left.contains(data) : null;
    }
    findLeft(data) {
        return this.right ? this.right.contains(data) : null;
    }
}

const node = new Node(1, 0);


// 전위 순환
// 문제가 배열 트리로 주어줬을 경우 1991번 문제 확인 

