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