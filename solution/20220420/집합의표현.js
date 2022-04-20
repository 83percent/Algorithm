"use strict";
(() => {
    class Union_Find {
        constructor(N) {
            this.parent = new Array(N);
            // 정점 0 에서 시작
            for(let i=0; i<N; ++i) {
                this.parent[i] = i;
            }
        }
        getParent(x) {
            if(this.parent[x] == x) return x;
            else return this.getParent(this.parent[x])
        }
        UnionParent(a,b) {
            a = this.getParent(a);
            b = this.getParent(b);
            if(a<b) this.parent[b] = a;
            else this.parent[a] = b;
        }
        findParent(a,b) {
            a = this.getParent(a);
            b = this.getParent(b);
            return a==b;
        }
    }
    const input = [
        '7 8',
        '0 1 3',
        '1 1 7',
        '0 7 6',
        '1 7 1',
        '0 3 7',
        '0 4 2',
        '0 1 1',
        '1 1 1'
    ];
    const cases = input.shift().split(" ").map(e => parseInt(e));
    const unionFind = new Union_Find(cases[0]+1);
    //const parentNode = Array.from({ length: cases[0] + 1 }, (__, index) => index);
    //console.log(parentNode);
    for (let i = 0; i < cases[1]; i++) {
        const [action, dot1, dot2] = input[i].split(" ").map(e => parseInt(e));
        if (action === 0) {
            unionFind.UnionParent(dot1, dot2);
        }
        else {
            console.log(unionFind.findParent(dot1, dot2) ? "YES" : "NO");
        }
    }
})();
