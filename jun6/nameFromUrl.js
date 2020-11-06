const domainName = url => {
  regex = url.includes('www') ? /\.(.*?)\./
    : /http/.test(url) && !url.includes('www') ? /\/\/(.*?)\./
      : /(.*?)\./;
  return regex.exec(url)[1];
}