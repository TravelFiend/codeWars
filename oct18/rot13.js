const rot13 = message => {
  let result = '';
  for (let i = 0; i < message.length; i++) {
    const code = message.charCodeAt(i);

    let newCode;
    code < 65 || (code > 90 && code < 97) || code > 122 ? newCode = code
      : ((code > 77 && code < 91) || code > 109) ? newCode = code - 13
        : newCode = code + 13;

    result += String.fromCharCode(newCode)
  };
  return result;
};