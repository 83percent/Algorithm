(() => {
    let input = [
        '10',
        '6 3 2 10 10 10 -10 -10 7 3',
        '8',
        '10 9 -5 2 3 4 5 -10'
    ];
    const obj = input[1].split(" ").reduce((acc, e) => {
        if(!acc[e]) acc[e] = 1;
        else acc[e]++;
        return acc;
    }, {});
    let print = "";
    for(let i of input[3].split(" ")) {
        let find = obj[i];
        if(find) print += find + " ";
        else print += "0 ";
        
    }
    console.log(print);
})();