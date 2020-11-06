***PROBLEM***: 

The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.

***SOLUTION***:

    const count = str => {  
      const r = {};
      for(i = 0; i < str.length; i++){
        !r[str[i]] ? r[str[i]] = 1 : r[str[i]]++;
      }
      return r;
    }