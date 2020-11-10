const stat = str => {
  if (str === '') { return '' };

  const milArr = str.split(', ').map(a => a.split('|')).reduce((a, b) => {
    const milli = (+b[0] * 3600000) + (+b[1] * 60000) + (+b[2] * 1000);
    a.push(milli);
    return a;
  }, []).sort((a, b) => a - b);

  const range = Math.max(...milArr) - Math.min(...milArr);
  const average = (milArr.reduce((a, b) => a + b) / milArr.length);
  const half = Math.floor(milArr.length / 2);
  const median = milArr.length % 2 ? milArr[half]
    : (milArr[half - 1] + milArr[half]) / 2;

  const addZero = time => time >= 10 ? time : ('0' + time);

  const hour = num => {
    const hours = Math.floor(num / 3600000)
    return addZero(hours);
  };
  const min = val => {
    const mins = hour(val) >= 1 ? Math.floor((val - (3600000 * hour(val))) / 60000)
      : Math.floor(val / 60000);
    return addZero(mins);
  };
  const sec = val => {
    const secs = val >= 60000 ? Math.floor((val % 60000) / 1000) : Math.floor(val / 1000);
    return addZero(secs);
  }
  const final = val => `${hour(val)}|${min(val)}|${sec(val)}`;

  return `Range: ${final(range)} Average: ${final(average)} Median: ${final(median)}`;
}