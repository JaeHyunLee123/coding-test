/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
    const helper = (n) => {
        if(n === 0) return 0;
        if(n === 1) return 1;

        return helper(Math.floor(n/2)) + n % 2;
    }

    return helper(n)
};