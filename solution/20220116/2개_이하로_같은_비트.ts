(() => {
    function solution(numbers:number[]):number[] {
        const result:number[] = [];
        function getDiffLen(number:number|string, compareNumber:number|string):number {
            let count = 0;
            compareNumber = compareNumber.toString(2);
            number = number.toString(2).padStart(compareNumber.length, "0");
            for(let i=number.length-1; i>=0; i--) {
                if(number[i] !== compareNumber[i]) count++;
                if(count > 2) return -1;
            }
            return count;
        }
        numbers.forEach(value => {
            if(value <= 3) {
                result.push(value+1);
            }
            else {
                const len = value.toString(2).length;
                let i:number = value+1;
                while(len >= i.toString(2).length-1) {
                    const diff = getDiffLen(value, i);
                    if(diff > 0) {
                        result.push(i);
                        break;
                    }
                    else i++;
                    
                }
            }
        });

        return result;
    }


    const numbers:number[] = [0,2,7,10232312312214312];
    console.log(solution(numbers));
})();