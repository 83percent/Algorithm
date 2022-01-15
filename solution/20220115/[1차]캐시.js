function solution(cacheSize, cities) {
    var runtime = 0;
    if (cacheSize === 0)
        return cities.length * 5;
    return runtime;
}
var cacheSize = 3, cities = ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Jeju", "Pangyo", "Seoul", "NewYork", "LA"];
console.log(solution(cacheSize, cities));
