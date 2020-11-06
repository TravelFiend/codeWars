***PROBLEM***: 

ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

***SOLUTION***:

    const rot13 = message => {
      let result = '';
      for(let i = 0; i < message.length; i++){
        const code = message.charCodeAt(i);
        
        let newCode;
        code < 65 || (code > 90 && code < 97) || code > 122 ? newCode = code
          : ((code > 77 && code < 91) || code > 109) ? newCode = code - 13
            : newCode = code + 13;
        
        result += String.fromCharCode(newCode)
      };
      return result;
    };