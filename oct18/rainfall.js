const makeNumbersArr = (town, strng) => {
  const splitDataArr = strng.split('\n').map(a => a.split(':')).map(i => {
    if (i[0] === town) { return i[1].split(',') };
  }).filter(j => j !== undefined);
  return !splitDataArr[0] ? -1 : splitDataArr[0].map(e => +e.split(' ').pop());
};

const mean = (town, strng) => {
  const nums = makeNumbersArr(town, strng);
  return nums === -1 ? -1 : nums.reduce((a, b) => a + b) / nums.length;
};

const variance = (town, strng) => {
  const nums = makeNumbersArr(town, strng);
  return nums === -1 ? -1 : nums.map(a => {
    return Math.pow(mean(town, strng) - a, 2);
  }).reduce((a, b) => a + b) / 12;
};