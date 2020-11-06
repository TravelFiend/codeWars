const reverse = str => {
  return str.split(' ').map((a, b) => {
    return b % 2 === 0 ? a : a.split('').reduce((rev, char) => char + rev, '');
  }).join(' ').trim();
};