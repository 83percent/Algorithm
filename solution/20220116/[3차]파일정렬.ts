(() => {
    function solution(files:string[]):string[] {
        if(files.length === 0) return [];
        if(files.length === 1) return files;
        const _sorted:string[] = [files[0]];
        files.shift();
        const head_regex = /^[a-zA-Z\.\-\s]{1,}/;
        const number_regex = /[0-9]{1,5}/;
        files.reduce((sorted, name) => {
            // HEAD
            const HEAD = name.toLowerCase().match(head_regex) || "0";
            const NUMBER = Number(name.match(number_regex));
            let end = false;
            for(let i=0; i<sorted.length; i++) {
                const prevHEAD = sorted[i].toLowerCase().match(head_regex) || "1";
                const prevNUMBER = Number(sorted[i].match(number_regex));
                if(prevHEAD[0] === HEAD[0]) {
                    if(NUMBER < prevNUMBER) {
                        sorted.splice(i,0,name);
                        end = true;
                        break;
                    }
                } else if(HEAD[0] < prevHEAD[0]) {
                    sorted.splice(i,0,name);
                    end = true;
                    break;
                }
            }
            if(!end) sorted.push(name);

            return sorted;
        }, _sorted);

        return _sorted;
    }
    const files:string[] = ["F-5 Freedom Fighter", "B-50 Superfortress", "F-51 Tomcat", "A-10 Thunderbolt II", "F-14 Tomcat"];
    
    console.log(solution(files));
    console.log(solution(["img12.png", "img10.png", "img02.png", "img1.png", "IMG01.GIF", "img2.JPG"]));
})();