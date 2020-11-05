const count = str => {
  const r = {};
  for (i = 0; i < str.length; i++) {
    !r[str[i]] ? r[str[i]] = 1 : r[str[i]]++;
  }
  return r;
}