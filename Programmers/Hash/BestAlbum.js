function solution(genres, plays) {
    let list = [];
    const element = () => ({
        playlist: [],
        all: 0
    });
    const album = genres.reduce((acc, cate, index, array) => {
        if(acc[cate] === undefined) acc[cate] = element();
        acc[cate].playlist.push([plays[index],index]);
        acc[cate].playlist.sort((a,b) => b[0]-a[0]);
        acc[cate].playlist = acc[cate].playlist.slice(0,2);
        acc[cate].all += plays[index];
        return acc;
    }, {});
    for(const cate in album) {
        list.push(album[cate]);
    }
    list.sort((a,b) => b.all - a.all);
    return list.reduce((acc, element) => {
        for(const playCountElement of element.playlist) {
            acc.push(playCountElement[1]);
        }
        return acc;
    }, [])
}

const genres = ["classic", "pop", "classic", "classic", "pop"];
const plays = [500, 600, 150, 800, 2500];
console.log(solution(genres, plays));