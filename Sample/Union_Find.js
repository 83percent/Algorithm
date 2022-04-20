/*
    같은 그래프 내에 존재하는지 확인하는 그래프.
*/
class Union_Find {
    constructor(N) {this.parent = Array.from({length : N}, (_,i) => i);}
    getParent(x) {
        if(this.parent[x] == x) return x;
        else {
            return this.getParent(this.parent[x]);
        }
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