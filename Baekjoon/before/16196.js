const input = [
    "441323200312060636",
    "1",
    "441323"
]
const code = input.shift().split("").map(e => parseInt(e));
input.shift();



}
class ProfileCode {
    constructor(code, regions) {
        this.code = code;
        this.regions = regions;
    }
    _isRegion() {
        const regionCode = ((code) => {
            result = "";
            for(let i=0; i<6; ++i) {
                result+= code[i]
            }
            return result;
        })(this.code);
        return this.regions.includes(regionCode)
    }
    _isBirth() {
        const birthCode = ((code) => {
            result = "";
            for(let i=6; i<14; ++i) {
                result+= code[i]
            }
            return result;
        })(this.code);
        
    }
    getGender() {
        

    }
}

