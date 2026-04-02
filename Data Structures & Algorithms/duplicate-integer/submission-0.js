/* 
P: 
- input is an array of integers 
- if any value appears more than once return true 
- otherwise return false 

E: 
[1, 2, 3, 3]

1: 1 
2: 1 
3: 2 
any of these >1 ? return true : false 


A: 
1. create a new empty  object called numCount 
2. iterate through the input array 
    1. set numCount at the current value to either the current value (if it exists) plus 1 or set the value to 1 
    2. if the current corresponding value is > 1 return true
3. return false 




*/ 




class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const numCount = {}
       for (let i = 0; i < nums.length; i++) {
        let num = nums[i]
        numCount[num] = (numCount[num] ?? 0) + 1 
        if (numCount[num] > 1 ) return true; 
       }
       return false; 
       
    }
}
