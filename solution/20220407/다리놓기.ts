(() => {
    const input:string[] = [
        "3",
        "2 2",
        "1 5",
        "13 29"
    ];
    input.shift();

    function getCombinationCount(N:number, M:number) {
        function factorial(n:number):number {
            return n ? n * factorial(n-1) : 1;
        }
        return factorial(N) / (factorial(M) * factorial(N - M));
    }
    for(const line of input) {
        const [N , M]:number[] = line.split(" ").map(e => parseInt(e));
        console.log(Math.ceil(getCombinationCount(M, N)));
    }
})();