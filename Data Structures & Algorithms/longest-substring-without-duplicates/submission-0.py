'''
P: 
 - input is a string; s 
 - need to find the length of the longest substring without duplicate characters 
 

 E: 
    s = 'zxyzxyz' 

    output: 3 

    we need to check each character until we reach a repeated character and track 
    the number of continous substring and then compare it to our max substring currently. 
    once done we then need to continue to the next

   set = {}
   max_substring = 0
   check through our char 
   is s in set? no add to set 
   set size > max_substring? yes update max_substring 

   {zxy}
   now we reach z again. we can remove the character from our set and continue on 



DS: 
   input: string 
   ouput: string 

   TC: O(n) we will only iterate through our list once 
   SC: O(n) we are creating a set here 


A: 
    1. initialize char_set to an empty set 
    2. initialize left to 0 and res to 0 
    3. iterate through s using right as our moving index 
        1. while the current value of s[r] is in charSet 
            a. remove the s[1] from char_set 
            b. move left up by. 1
        2. otherwise add s[r] to char_set 
        3. set res to the max value between it and r - l + 1 

'''



class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        char_set = set()
        left = 0 
        res = 0 

        for right in range(len(s)): 
            while s[right] in char_set: 
                char_set.remove(s[left])
                left += 1 
            char_set.add(s[right])
            res = max(res, right - left + 1)

        return res
           

        
        