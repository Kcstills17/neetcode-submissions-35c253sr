/* 
P: 
- we are given an input array containing string. 
- the input array will only contain valid ascii characters 
- implment a encode method which will convert a list of strings to a string 
- this string is sent over the network. 
- implement a decode method that will decode the string back into the list of strings. 



*/



class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
   encode(strs) {
    let res = '';
    for (let str of strs) {
        res += str.length + '#' + str;
    }
    return res;
}

    /**
     * @param {string} str
     * @returns {string[]}
     */
  decode(s) {
    let res = [];
    let i = 0;

    while (i < s.length) {
        let j = i;
        while (s[j] !== '#') j++;

        let len = parseInt(s.slice(i, j));
        let str = s.slice(j + 1, j + 1 + len);

        res.push(str);
        i = j + 1 + len;
    }

    return res;
}
}
