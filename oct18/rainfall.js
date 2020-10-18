const makeNumbersArr = (town, strng) => {
  const splitDataArr = strng.split('\n').map(a => a.split(':')).map(i => {
    if (i[0] === town) { return i[1].split(',') };
  }).filter(j => j !== undefined);
  return splitDataArr[0].length === 0 ? -1 : splitDataArr[0].map(e => +e.split(' ').pop());
};

const mean = (town, strng) => {
  const newArr = makeNumbersArr(town, strng);
  return newArr.reduce((a, b) => a + b) / newArr.length;
};

const variance = (town, strng) => {
  return makeNumbersArr(town, strng).map(a => {
    return Math.pow(mean(town, strng) - a, 2);
  }).reduce((a, b) => a + b) / 12;
};