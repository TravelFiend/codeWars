***Problem:***

Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

    domainName("http://github.com/carbonfive/raygun") == "github" 
    domainName("http://www.zombie-bites.com") == "zombie-bites"
    domainName("https://www.cnet.com") == "cnet"

***Solution:***

    function domainName(url) {
      regex = url.includes('www') ? /\.(.*?)\./
        : /http/.test(url) && !url.includes('www') ? /\/\/(.*?)\./
        : /(.*?)\./;
      return regex.exec(url)[1];
    }