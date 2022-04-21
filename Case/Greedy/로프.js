(() => {
    let input = [
        '2',
        '1',
        '1'
    ];
    const N = parseInt(input.shift());
    input = input.map(e => parseInt(e)).sort((a,b) => b-a);
    console.log(input);
    let result = 0;
    for(let i = 0; i < N; i++) {
        const temp = BigInt(input[i] * (i+1));
        if(result <= temp) result = temp;
        else break;
    }
    console.log(String(result));
})();