const line = "1";

let n = 1;
    let add = 2;
    let def = false;
    while(line > n) {
        n += add;
        add++;
        def = !def;
    }
    
    const gap = Math.abs(n-line);
    console.log(gap);
    console.log(add);
    console.log(def ? `${add-1-gap}/${1+gap}` : `${1+gap}/${add-1-gap}`);