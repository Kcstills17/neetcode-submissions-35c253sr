'''
P: 
    - input is an array of integers; nums 
    - return the length of the longest consecutive sequence of elements that   
      can be formed 
    -  here a consec sequence is sequence of elements exactly 1 greater than a previous element
    - they do NOT have to be consecutive in the input array 
    - time compelxity must be o(n) 
    - ignore duplicate values 

E: 
    Input: nums = [0,3,2,5,4,6,1,1]
    Output: 7

we can create unique values using a set 

{0, 3, 2, 5, 4, 6, 1, 1}

we know that sets are unordered, how can we check through each next digit without 
checking the same digits over and over. 

a solution is to check for a number right before the beginning of our set 

e.g. 
0 is in the set. 0 - 1 is not in the set so we can start from here 

while the next number in the set is more by exactly 1 we can keep upping the length 
and then check for a max 


DS: 
input: array of integers 
output: integer of the max sequence of consecutive numbers by 1 

TC: o(n) -> using a set we will only walk through the items on time 
SC: o(n) -> a set is constructed 


A: 


    1. initialize max_length to 0 
    2. initialize nums_set to the result of converting nums to a set 
    3. iterate through each number in nums_set 
        1. if the current number -1 is not in the nums_set 
            1. initialize length to 1 
            2. initialize current to number 

            while current + 1 is in the nums_set 
                increase length by 1
                increase current by 1 
        2. set max_length to the max between max_length and length 

    4. return max_length 

 [2, 20, 4 , 10, 3, 4, 5]
 {2, 20, 4, 10, 3, 4, 5}
 2 - 1 in the set? 
 no so start here 
 length = 1 
 current = 2 

 current + 1 in the set? (3) yes 
 length = 2 
 current = 3 
 current + 1 in the set? (4) yes 
 length = 3 
 current = 4 
 current + 1 in the set? (5) yes 
 length = 4 
 current = 5
 current + 1 in the set? (6) no 

'''


class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        max_length = 0 
        nums_set = set(nums)
        for number in nums_set: 
            if (number - 1) not in nums_set: 
                length = 1 
                current = number 

                while (current + 1) in nums_set: 
                    length += 1
                    current += 1 
                max_length = max(max_length, length)
        return max_length  

        