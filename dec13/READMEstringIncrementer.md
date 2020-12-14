***PROBLEM***: 

Your job is to write a function which increments a string, to create a new string.

If the string already ends with a number, the number should be incremented by 1.
If the string does not end with a number. the number 1 should be appended to the new string.
Examples:

    foo -> foo1

    foobar23 -> foobar24

    foo0042 -> foo0043

    foo9 -> foo10

    foo099 -> foo100

Attention: If the number has leading zeros the amount of digits should be considered.

***SOLUTION***:

    const incrementString = str => {
      if (!/\d+$/.test(str)) return `${str}1`;

      const letters = /[A-Za-z]/g.test(str) ? str.match(/[A-Za-z]/g).join('') : '';
      const nums = str.match(/\d/g).join('');
      const addOne = (+nums + 1).toString();

      let finalNum;
      if (nums.length === addOne.length) {
        finalNum = addOne;
      } else {
        const it = nums.length - addOne.length;
        let zeroes = '';
        for (let i = 0; i < it; i++) {
          zeroes += '0';
        };
        finalNum = `${zeroes}${addOne}`;
      };
      return `${letters}${finalNum}`;
    };