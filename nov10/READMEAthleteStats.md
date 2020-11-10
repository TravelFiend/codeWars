***PROBLEM***: 

You are the "computer expert" of a local Athletic Association (C.A.A.). Many teams of runners come to compete. Each time you get a string of all race results of every team who has run. For example here is a string showing the individual results of a team of 5 runners:

    "01|15|59, 1|47|6, 01|17|20, 1|32|34, 2|3|17"

Each part of the string is of the form: h|m|s where h, m, s (h for hour, m for minutes, s for seconds) are positive or null integer (represented as strings) with one or two digits. There are no traps in this format.

To compare the results of the teams you are asked for giving three statistics; range, average and median.

Range : difference between the lowest and highest values. In {4, 6, 9, 3, 7} the lowest value is 3, and the highest is 9, so the range is 9 − 3 = 6.

Mean or Average : To calculate mean, add together all of the numbers in a set and then divide the sum by the total count of numbers.

Median : In statistics, the median is the number separating the higher half of a data sample from the lower half. The median of a finite list of numbers can be found by arranging all the observations from lowest value to highest value and picking the middle one (e.g., the median of {3, 3, 5, 9, 11} is 5) when there is an odd number of observations. If there is an even number of observations, then there is no single middle value; the median is then defined to be the mean of the two middle values (the median of {3, 5, 6, 9} is (5 + 6) / 2 = 5.5).

Your task is to return a string giving these 3 values. For the example given above, the string result will be

    "Range: 00|47|18 Average: 01|35|15 Median: 01|32|34"

of the form:

    "Range: hh|mm|ss Average: hh|mm|ss Median: hh|mm|ss"

where hh, mm, ss are integers (represented by strings) with each 2 digits.

Remarks:

if a result in seconds is ab.xy... it will be given truncated as ab.

if the given string is "" you will return ""

***SOLUTION***:

    const stat = str => {
      if(str === ''){ return '' };
      
      const milArr = str.split(', ').map(a => a.split('|')).reduce((a, b) => {
        const milli = (+b[0] * 3600000) + (+b[1] * 60000) + (+b[2] * 1000);
        a.push(milli);
        return a;
      }, []).sort((a, b) => a - b);
      
      const range = Math.max(...milArr) - Math.min(...milArr);
      const average = (milArr.reduce((a, b) => a + b) / milArr.length);
      const half = Math.floor(milArr.length / 2);
      const median =  milArr.length % 2 ? milArr[half]
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