Math.round = function (number) {
  const integer = Number(number.toString().match(/^([^.]*)/)[0]);
  return number % 1 < 0.5 ? integer : integer + 1;
};

Math.ceil = function (number) {
  const integer = Number(number.toString().match(/^([^.]*)/)[0]);
  return Number.isInteger(number) ? integer : integer + 1;
};

Math.floor = function (number) {
  return Number(number.toString().match(/^([^.]*)/)[0])
};