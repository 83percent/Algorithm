(() => {
    function solution(str1, str2) {
        /**
         * @param {string} string 
         */
        function getJakard(string) {
            const rtnObj = {};
            string = string.toLowerCase();
            for(let i=0; i<string.length-1; i++) {
                const temp = string[i] + string[i+1];
                if(temp.replace(/[^a-zA-Z]/g, "").length === 2) {
                    if(rtnObj[temp] === undefined) rtnObj[temp] = 1;
                    else rtnObj[temp]++;
                }
            }
            return rtnObj;
        }

        const J1 = getJakard(str1);
        const J2 = getJakard(str2);
        const all = [...new Set([...Object.keys(J1), ...Object.keys(J2)])];
        // [min, max]
        const result = all.reduce((acc, key) => {
            if(J1[key] && J2[key]) {
                acc[0] += J1[key] <= J2[key] ? J1[key] : J2[key];
                acc[1] += J1[key] >= J2[key] ? J1[key] : J2[key];
            } else {
                acc[1] += J1[key] !== undefined ? J1[key] : J2[key];
            }
            return acc;
        }, [0, 0]);

        let J = result[0] / result[1];
        if(isNaN(J)) J = 1;
        J = J * 65536;

        return parseInt(J);
    }

    const exs = [
        ["FRANCE", "french", 16384],
        ["handshake", "shake hands", 65536],
        ["aa1+aa2", "AAAA12", 43690],
        ["E=M*C^2", "e=m*c^2", 65536]
    ]
    for(let ex of exs) {
        let result = solution(ex[0], ex[1]);
        console.log(result, result === ex[2]);
    }
})();
