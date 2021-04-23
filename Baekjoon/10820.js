const input =  [
    "This is String",
    "SPACE    1    SPACE",
    " S a M p L e I n P u T     "   ,
    "0L1A2S3T4L5I6N7E8"
];

for(const strs of input) {
    let result = [0,0,0,0];
    for(const str of strs) {
        let code = str.charCodeAt(0);
        // 공백 32
        if(code == 32) result[3]++;
        // 숫자 48 (0) ~ 57 (9)
        else if (code <= 57) result[2]++;
        // 대문자 65~90
        else if (code <= 90) result[1]++;
        // 소문자 97~122
        else result[0]++   
    }
    console.log(result.join(" "));
}
