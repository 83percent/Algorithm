const n = 10;

const f = [0,1];
for(let i = f.length; i<=n; i++) {
    f[i] = f[i-1] + f[i-2];
}

console.log(f[n])