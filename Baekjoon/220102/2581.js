const input = [
    "60",
    "100"
];

function solution(input) {
        const min = parseInt(input[0]);
        const max = parseInt(input[1]);
        const number_array = Array.from({length : max+1}, () => true);
        number_array[0] = false;
        number_array[1] = false;
        let min_prime = undefined;
        let sum = 0;
        for(let i=2; i<=max; i++) {
            if(number_array[i]) {
                for(let j=i*2; j<=max; j+=i) {
                    number_array[j] = false;
                }
                if(i >= min) {
                    
                    if(min_prime === undefined) min_prime = i;
                    sum += i;
                }
            }
        }
        if(sum === 0) console.log(-1);
        else {

            console.log(sum)
            console.log(min_prime);
        }
}

solution(input);