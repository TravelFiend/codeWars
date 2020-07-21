const high = x => {
  const wordArr = x.split(' ');
  const scoreArr = [];

  console.log(wordArr);

  wordArr.map(word => {
    let score = 0;
    let index = 0;

    while (index < word.length) {
      score += word.charCodeAt(index) - 96;
      index++;
    };

    scoreArr.push(score);
  });
  return wordArr[scoreArr.indexOf(Math.max(...scoreArr))];
};