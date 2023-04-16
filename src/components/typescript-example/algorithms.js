/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(let i=0; i < nums.length - 1; i++){
        for(let j=i+1; j< nums.length; j++){
            if((nums[i] + nums[j]) === target) {
                return [i,j];
            }
        }
    }
    return [];
    //The time complexity of this function is O(n^2), where n is the length of the input array nums. This is because the function uses nested loops to compare every pair of elements in the array.
    //The space complexity of this function is O(1), because the function only uses a fixed amount of space to store the indices of the two elements that add up to the target sum, and this space requirement does not depend on the size of the input array nums.
};