(() => {
    function solution(cacheSize:number, cities:string[]):number {
        if(cacheSize === 0) return cities.length * 5;
        let runtime = 0
        const cache:string[] = [];
    
        for(let city of cities) {
            city = city.toUpperCase();
            if(cache.includes(city)) {
                cache.splice(cache.indexOf(city),1);
                runtime += 1;
            } else {
                if(cache.length === cacheSize-1) cache.shift();
                runtime += 5;
            }
            cache.push(city);
        }
        
    
        return runtime;
    }
    
    const cacheSize = 3,
        cities = ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Jeju", "Pangyo", "Seoul", "NewYork", "LA"];
    
        console.log(solution(cacheSize, cities));
})();