/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let i = 0;
    let j = 0;

    const temp = nums1.slice(0,m);

    while(i < m && j < n){
        if(temp[i] < nums2[j]){
            nums1[i+j] = temp[i]
            i++;
        }else{
            nums1[i+j] = nums2[j]
            j++;
        }
    }

    while(i < m){
        nums1[i+j] = temp[i];
        i++;
    }

    while(j < n){
        nums1[i+j] = nums2[j]
        j++;
    }
};