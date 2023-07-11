let calculateAverage = (nums) => {
    let calcAvg = () => {
        let ans = 0;
        for( let i = 0; i < nums.length; i++ ){
            ans += nums[i] / nums.length;
        }
        return ans;
    }
    return calcAvg;
}