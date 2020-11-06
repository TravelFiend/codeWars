const sumDigPow = (a, b) => {
  const rangeArr = [];

  for (let i = a; i <= b; i++) {
    rangeArr.push(i);
  };

  const sumOfDigitsToThePower = rangeArr.map(a => {
    return a.toString().split('').map(b => Number(b));
  }).map(a => {
    return a.map((b, c) => Math.pow(b, c + 1));
  }).map(d => {
    return d.reduce((e, f) => e + f);
  });

  return rangeArr.filter((val, ind) => val === sumOfDigitsToThePower[ind]);
};
