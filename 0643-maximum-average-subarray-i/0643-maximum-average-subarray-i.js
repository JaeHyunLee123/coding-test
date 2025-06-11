/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let sum = nums.slice(0,k).reduce((acc,curr) => acc + curr, 0);
    let maxAverage = sum / k;

    for(let i = k; i < nums.length; i++){
        sum -= nums[i-k];
        sum += nums[i];

        const newAverage = sum / k;

        maxAverage = Math.max(newAverage, maxAverage);
    }

    return maxAverage;
};