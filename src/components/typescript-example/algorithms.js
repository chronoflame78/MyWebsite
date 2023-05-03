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


//https://leetcode.com/problems/median-of-two-sorted-arrays/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    //the space complexity of the function is O(N), 
    //where N is the total length of both input arrays.
    //The time complexity of the sorting algorithm used in JavaScript is O(N*log(N))
    //the time complexity of the function is O(N*log(N)), 
    //where N is the total length of both input arrays.

    let nums3 = [...nums1, ...nums2];
    nums3 = nums3.sort(function(a, b){return b - a})
    if(nums3.length % 2 !== 0){
        return nums3[Math.floor(nums3.length/2)];
    }
    else{
        let a = nums3[Math.floor(nums3.length/2)];
        let b = nums3[Math.floor(nums3.length/2 - 1)];
        return (a+b)/2;
    }
};

//https://leetcode.com/problems/longest-palindromic-substring/

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let maxPalindrome = '';
    for (let i = 0; i < s.length; i++) {
        // Check for odd-length palindromes
        let l = i, r = i;
        while (l >= 0 && r < s.length && s[l] === s[r]) {
            let currPalindrome = s.substring(l, r + 1);
            if (currPalindrome.length > maxPalindrome.length) {
                maxPalindrome = currPalindrome;
            }
            l--;
            r++;
        }
        
        // Check for even-length palindromes
        l = i;
        r = i + 1;
        while (l >= 0 && r < s.length && s[l] === s[r]) {
            let currPalindrome = s.substring(l, r + 1);
            if (currPalindrome.length > maxPalindrome.length) {
                maxPalindrome = currPalindrome;
            }
            l--;
            r++;
        }
    }
    return maxPalindrome;
    //This solution has a time complexity of O(n^2), where n is the length of the input string, because it checks all possible substrings of the string.
    //The space complexity of the function is O(1), which means that it uses a constant amount of extra space regardless of the size of the input string s.
};


//https://leetcode.com/problems/reverse-integer/

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    if(x > (Math.pow(2, 31) - 1)) return 0;
    if(x < Math.pow(-2, 31)) return 0;
    const str = `${x}`;
    let subStr = '';
    if(str[0] === '-'){
        subStr = str.slice(1, str.length);
        subStr = subStr.split("").reverse().join("");
        if((parseInt(subStr) * -1) > (Math.pow(2, 31) - 1)) return 0;
        if((parseInt(subStr) * -1) < Math.pow(-2, 31)) return 0;
        return parseInt(subStr) * -1;
    }
    else{
        let result = parseInt(str.split("").reverse().join(""));
        if(result > (Math.pow(2, 31) - 1)) return 0;
        if(result < Math.pow(-2, 31)) return 0;
        return result;
    }
};

//https://leetcode.com/problems/palindrome-number/
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x < 0) return false;
    if(x < 10) return true;
    const text = x.toString();
    const reverseText = text.split("").reverse().join("");
    if(text === reverseText) return true;
    return false;
};

//https://leetcode.com/problems/integer-to-roman/
var intToRoman = function(num) {
    const romanNumerals = [
        { value: 1000, symbol: 'M' },
        { value: 900, symbol: 'CM' },
        { value: 500, symbol: 'D' },
        { value: 400, symbol: 'CD' },
        { value: 100, symbol: 'C' },
        { value: 90, symbol: 'XC' },
        { value: 50, symbol: 'L' },
        { value: 40, symbol: 'XL' },
        { value: 10, symbol: 'X' },
        { value: 9, symbol: 'IX' },
        { value: 5, symbol: 'V' },
        { value: 4, symbol: 'IV' },
        { value: 1, symbol: 'I' },
    ];
    
    let result = '';
    for (let i = 0; i < romanNumerals.length; i++) {
        while (num >= romanNumerals[i].value) {
            result += romanNumerals[i].symbol;
            num -= romanNumerals[i].value;
        }
    }
    return result;
};


//https://leetcode.com/problems/roman-to-integer/
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const items = {
    I:1,
    V:5,
    X:10,
    L:50,
    C:100,
    D:500,
    M:1000
  };
  let total = 0;

  for (let i = 0; i < s.length; i++) {
    if (items[s[i]] < items[s[i+1]]) {
      total += items[s[i+1]] - items[s[i]];
      i++;
    } else {
      total += items[s[i]];
    }
  }

  return total;

};