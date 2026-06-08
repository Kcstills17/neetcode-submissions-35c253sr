'''
P: 
    - input is a string; s 
    - return true if it is a palindrome, false otherwise 

'''
import re
class Solution:
    def isPalindrome(self, s: str) -> bool:
       cleaned = re.sub(r'[^a-zA-Z0-9]', '', s).lower()
       return cleaned == cleaned[::-1]
        

