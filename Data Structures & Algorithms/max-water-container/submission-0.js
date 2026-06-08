/* 
P: 
    - are input includes heights which is an array where heights[i] represents the height of the ith bar 
    - we can choose any two bars to form a container 
    - Must return the maximum amount of water a container can store 

E: 
Input: height = [1,7,2,5,4,7,3,6]

Output: 36

calculating the maximum water a container can store is similar to a rectangle. 
height * width 

height will determine how high without spilling 
width will be the amount of bars we can contain 

to get the width we can get the difference between indexes 
height will be the minimum value at each index 

in the e.g 
index 1 (7) and 7(6) here is the maxium value 
7 -1 = 6
heightis min(7, 6) -> 6 
6 * 6 == 36

we want our height/weight combo to be maximized so we want to optimize for both values to be high and for them to be 
far apart in distance. 

we can use two pointer and keep track of the maximum score throughout the process 


DS: 
  TC: O(n)
  SC: O(n)


A: 

1. initialize l to 0 and r to the length of heights - 1 
2. initialize maxAmount to 0 
3. initialize height and width to 0 
4. while l < r 
    1. set width to r - l 
    2. set height to minimum value of the values with r and l 
    3. compare maxAmount to product of width and height and set max value 

    4a. if heights[l] < heights[r]
        1. increment l by 1 
    4b. if heights[l] > heights[r] 
        1. decrement r by 1 
    4c. else   
        1. move either l up or r down. either is fine 

5. return maxAmount 



 


*/   

class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let l = 0; 
        let r = heights.length - 1; 
        let maxAmount = 0; 
        let height = 0; 
        let width = 0; 

        while (l < r) {
            width = r - l
            height = Math.min(heights[l], heights[r])
            maxAmount = Math.max(maxAmount, width * height)

            if (heights[l] < heights[r]) {
                l += 1; 
            } else if (heights[l] > heights[r]) {
                r -= 1; 
            } else {
                r -= 1; 
            }
        }

        return maxAmount
    }
}
