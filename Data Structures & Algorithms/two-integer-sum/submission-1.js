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

{4: 0, 5: 1, 2: 2, 6: 3, 7: 4, 3: 5}

valueInd[target - nums[i]] === 6 
valueInd[nums[i]] = i 

get to value 6 
i = 3 

valueInd[target - nums[i]] === 4 
is 4 a key in the object? yes 
value[target - nums[i]], value[nums[i]]

nums[i] + nums[j] = 10 (no)
increment both 
now they do 
return [i, j]

DS: 
time complexity: O(n)
space complexity: O(1)

A: 

1. initialize valueInd to an empty object 
2. iterate through nums and get each num 
    1. does target - num exist in valueInd? 
        if it does then return [valueInd[target - 1], valueInd[nums[i]]]
        else add the value (as a key) and index (as the value) to valueInd
*/ 


class Solution {
    
    twoSum(nums, target) {
      const valueInd = {}; 

      for (let i = 0; i < nums.length; i++) {
        if (valueInd.hasOwnProperty(target - nums[i])) {
            return [valueInd[target - nums[i]], i]
        } else {
            valueInd[nums[i]] = i 
        }
      }
       

    }
}
