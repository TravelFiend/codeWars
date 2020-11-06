***Problem:***

Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.

***Solution:***

    const high = x => {
      const wordArr = x.split(' ');
      const scoreArr = [];
      
      console.log(wordArr);
      
      wordArr.map(word => {
        let score = 0;
        let index = 0;
        
        while(index < word.length){
          score += word.charCodeAt(index) - 96;
          index++;
        };
        
        scoreArr.push(score);
      });
      return wordArr[scoreArr.indexOf(Math.max(...scoreArr))];
    };