const findChildren = str => {
  const codes = str.split('').map(a => {
    const oneCode = a.charCodeAt(0);
    return a = oneCode < 95 ? oneCode + 32 : oneCode;
  }).sort((a, b) => a - b);

  return codes.map((c, i) => {
    const prevCode = codes[i - 1];
    if (c === prevCode || c === prevCode + 32 || (i === 0 && c < 95) || c < 95 && (c !== prevCode || c !== prevCode + 32 || c !== prevCode - 32)) {
      return c = String.fromCharCode(c);
    }
    return c = String.fromCharCode(c - 32);
  }).join('');
};

const findChildren1 = str => {
  return str.split('')
    .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()) || b.localeCompare(a))
    .join('');
};
