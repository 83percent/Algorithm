const input = "3 16";

function solution(input) {
    const [min, max] = input.split(" ").map(e => parseInt(e));
    const number_array = Array.from({length : max+1}, () => true);
    number_array[0] = false;
    number_array[1] = false;
    for(let i=min; i<=max; i++) {
        if(number_array[i]) {
            for(let j=i*2; j<=max; j+=i) {
                number_array[j] = false;
            }
            console.log(i);
        }
        
    }
}

solution(input);