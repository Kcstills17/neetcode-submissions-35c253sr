
'''
P: 
 - input contains two strings 
 - anagram is a string that contains the same values as another string, but can be ordered differently 
 - is s and t are anagrams of one another return true 
 - return false otherwise 
 - s and t do not have to be the same length 

 DS: 
 time complexity: o(log n + log m) 
 space complexity: o(1)

 A: 
 1a. if s and t are not the same length return false 
 1b. return the result of comparing s sorted and t sorted to see if they are the same 

'''

class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t): 
            return False 
        return sorted(s) == sorted(t)

        
