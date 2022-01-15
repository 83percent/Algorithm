(() => {
    function solution(fees:number[], records:string[]):number[] {
        const memory:{[propName: string]:number} = {};
        const max = 1439; // 23:59
        const [baseTime, basePrice, time, timePrice] = fees;
        const map = new Map();
        records.forEach(s => {
            const [time_s, number, state] = s.split(" ");
            const [hour, min] = time_s.split(":");
            if(state === "IN") {
                map.set(number, (parseInt(hour)*60) + parseInt(min));
            } else {
                const in_time = map.get(number);
                const spend:number = (parseInt(hour)*60) + parseInt(min) - in_time;
                
                map.delete(number);
                if(memory[number] === undefined) memory[number] = spend;
                else memory[number] += spend;
            }
        });

        map.forEach((in_time, key) => {
            if(memory[key] === undefined) memory[key] = max - in_time;
            else memory[key] += max - in_time;
        });

        return Object.entries(memory).sort().reduce((acc:number[], [_, _time]) => {
            if(_time - baseTime <= 0) acc.push(basePrice);
            else acc.push(Math.ceil((_time-baseTime)/time) * timePrice + basePrice)
            return acc;
        }, []);
    }

    const fees = [180, 5000, 10, 600];
    const records = ["05:34 5961 IN", "06:00 0000 IN", "06:34 0000 OUT", "07:59 5961 OUT", "07:59 0148 IN", "18:59 0000 IN", "19:09 0148 OUT", "22:59 5961 IN", "23:00 5961 OUT"];
    console.log(solution(fees, records));
})();