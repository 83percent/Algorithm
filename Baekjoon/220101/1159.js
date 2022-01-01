const input = [
    "18",
    "babic",
    "keksic",
    "boric",
    "bukic",
    "sarmic",
    "balic",
    "kruzic",
    "hrenovkic",
    "beslic",
    "boksic",
    "krafnic",
    "pecivic",
    "klavirkovic",
    "kukumaric",
    "sunkic",
    "kolacic",
    "kovacic",
    "prijestolonasljednikovi"
]
const N = parseInt(input.shift());
if(N < N) console.log("PREDAJA");
else {
    const list = {};
    for(let player of input) {
        const fn = player[0];
        if(list[fn] === undefined) list[fn] = 1;
        else list[fn]++;
    }
    const result = Object.entries(list).reduce((acc, [name, count]) => {
        if(count >= 5) acc.push(name);
        return acc;
    }, []);
    if(result.length === 0) console.log("PREDAJA");
    else console.log(result.sort().join(""));
    
}