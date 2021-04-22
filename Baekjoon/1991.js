class Order {
    constructor(list) {
        this.list = list;
        this.pre = "";
        this.mid = "";
        this.post = "";
    }
    getPre() {return this.pre}
    getMid() {return this.mid}
    getPost() {return this.post}
    getResult() {
        console.log(this.pre);
        console.log(this.mid);
        console.log(this.post);
    }
    // 모든 순회
    orderList(root) {
        if(root == '.') return;
        this.pre += root
        this.orderList(list[root][0]);
        this.mid += root;
        this.orderList(list[root][1]);
        this.post += root;

    }

    //전위순회
    /* preOrderTree(root) {
        if(root == '.') return;
        this.pre += root
        this.preOrderTree(list[root][0]);
        this.preOrderTree(list[root][1]);
    } */
    // 중위순회
    /* inOrderTree(root) {
        if(root == '.') return;
    
        this.inOrderTree(list[root][0]);
        this.mid += root;
        this.inOrderTree(list[root][1]);
    } */
    // 후위순회
    /* postOrderTree(root) {
        if(root == '.') return;
    
        this.postOrderTree(list[root][0]);
        this.postOrderTree(list[root][1]);
        this.post += root;
    } */
}
const input = [
        "7",
    "A B C",
    "B D .",
    "C E F",
    "E . .",
    "F . G",
    "D . .",
    "G . ."
];
const size = parseInt(input.shift());

// 주어진 배열 노드를 리스트 형태로 변환
const list = {};
input.forEach(e => {
    const data = e.split(" ");
    list[data.shift()] = data;
});

let root = 'A'; // 시작지점



const order = new Order(list);
order.orderList(root);

/* order.preOrderTree(root);
order.inOrderTree(root);
order.postOrderTree(root); */

console.log(order.getPre());
console.log(order.getMid());
console.log(order.getPost());