//https://leetcode.com/problems/two-sum/
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


//https://leetcode.com/problems/longest-substring-without-repeating-characters/
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let max_length = 0, currStrLength = 0, hash = {};

    if(s.length < 2) return s.length;

    for(let i = 0; i < s.length; i++){
        if(hash[s[i]] == undefined){
            currStrLength ++;
        }
        else{
            currStrLength = Math.min(i - hash[s[i]], currStrLength + 1);
            //reset the current str length
            //special case abba
        }
        max_length = Math.max(max_length, currStrLength);
        hash[s[i]] = i; //save the last index
    }
    return max_length;

    //The time complexity of this function is O(n), where n is the length of the input string s. 
    //This is because the function iterates through the string once using a single for loop.
    
    //The space complexity of this function is O(min(n, m)), where m is the size of the character set. 
    //This is because the function uses a hash table to store the last index of each character in the current substring.
    //In the best case, when all the characters in the input string are the same, the size of the hash table is constant, so the space complexity is O(1).
};