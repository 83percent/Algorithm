/*
    기준 : 간선(Edge)
    최소신장트리를 만들것임. 이것의 간선은 주어진 정점의 개수(N)에서 1을 뺀 (N-1) 개이다.
*/
class Kruskal {
    constructor(N) {
        this.UnionFind = new Array(N); // 순환을 확인하기 위한 Union Find
        for(let i=0; i<N; ++i) {
            this.UnionFind[i] = i;
        }
    }
    
}