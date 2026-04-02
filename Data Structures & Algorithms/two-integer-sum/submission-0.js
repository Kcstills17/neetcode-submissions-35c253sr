/* 
P:
 - input params are array of integers (nums) and an integer (target) 
 - Return an array containing the indices i and j. nums[i] + nums[j] must equal 
   the target and the indices must not equal one another. 
 - There will always be at least once case of two indices that match the target 
 - if there is more than one return the answer with the smaller index first. 


E: 


[4, 5, 2, 6, 7, 3 ],  10 
i = 0 
j = 1 

nums[i] + nums[j] = 10 (no)
increment both 
now they do 
return [i, j]

DS: 
time complexity: O(n)
space complexity: O(1)

A: 

1. iterate through nums and initialize i for each value on this loop    
    1. iterate through nums again and initialize j for each value   
    1. if nums[i] + nums[j] === target and i != j   
        return [i, j]


*/ 


class Solution {
    
    twoSum(nums, target) { 
       for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (nums[i] + nums[j] === target && i != j ) return [i, j]
        }
       }

    }
}
