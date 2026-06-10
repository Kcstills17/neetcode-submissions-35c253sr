/* 
P: 
    - we are given an array of non-negative integers 
      called height 
    - height represents an elevation map 
      each value height[i] represents the height of a bar 
    - each bar has a width of 1 
    - the goal is to return the maximum area of water that 
      can be trapped between the bars 
    
E: 

Input: height = [0,2,0,3,1,0,1,3,2,1]

we need to determine the max amount of rain water we can collect between each bar. 

if we think of each current index and the bars to the left and right. we can determine 
how much the current bar can capture. 

we know the water is capped by the shortest side of either end. We can use two pointers to build 
out tallest left and right and as we go along we can get the min of 
our tallest left and tallest right and subtract heights[i]



DS: 
    TC: walk through the list once so O(n)
    SC: O(1)

A: 
    1. initialize l to 0 and r to the length of the arr - 1 
    2. initialize leftMax to l and rightMax to r 
    3. initialize maxWaterArea to 0 
    4. enter a while loop until ! l < r 
        1a. if height[l] < height[r]
            1. increment l by 1 
            2. set leftMax to the max of leftMax and height[l]
            3. increment maxWaterArea by the max of 0 or leftMax - height[l]
        1b. else 
            1. decrement r by 1 
            2. set rightMax to the max of rightMax and height[r]
            3. increment maxWaterArea by the max of 0 and rightMax - height[r]

    5. return maxWaterArea 
            


*/ 


class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let l = 0; 
        let r = height.length - 1; 
        let leftMax = height[l]; 
        let rightMax = height[r]; 
        let maxWaterArea = 0; 

        while (l < r) {     

            if (height[l] < height[r]) {
                l += 1;
                leftMax = Math.max(leftMax, height[l]);
                maxWaterArea += Math.max(0, Math.min(leftMax -  height[l]));
            } else {
                r -= 1;
                rightMax = Math.max(rightMax, height[r]);
                maxWaterArea += Math.max(0, Math.min(rightMax - height[r]));
            }

           
        }
         return maxWaterArea;
    }
}
