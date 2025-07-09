/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    const answer = [];

    for(let i = 0; i < nums.length; i++){
        const num = nums[i];

        if(num === val){
            nums.splice(i, 1);
            i--;;
        }
    }


    return nums.length;
};