function domainName(url) {
  regex = url.includes('www') ? /\.(.*?)\./ : /\/\/(.*?)\./;
  return regex.exec(url)[1];
}