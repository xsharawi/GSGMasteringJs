let powerOf = (base) => {
    let exponent = (exp)=>{
        let ans = 1;
        for( let i = 0; i < exp; i++){
            ans *= base;
        }
        return ans;
    }
    return exponent;
}