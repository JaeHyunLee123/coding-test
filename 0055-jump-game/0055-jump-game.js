/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {

    //let isPossible = false;
    const visited = new Map();
    
    const dfs = (currIndex) => {
        if(currIndex === nums.length - 1){
            //isPossible = true;
            return true;
        }

        if(currIndex > nums.length - 1){
            return false;
        }

        if(nums[currIndex] === 0){
            return false;
        }

        if(currIndex + nums[currIndex] === nums.length - 1){
            //isPossible = true;
            return true;
        }

        if (visited.has(currIndex)) return false;

        visited.set(currIndex, true);
        for(let i = 0; i < nums[currIndex] && currIndex + i + 1 < nums.length; i++){
            const nextIndex = currIndex + i + 1;

            if(dfs(nextIndex)){
                return true;
            }
        }
        return false
    }

    return dfs(0);
};