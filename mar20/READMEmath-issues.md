***PROBLEM***: 

Oh no, our Math object was "accidently" reset. Can you re-implement some of those functions? We can assure, that only non-negative numbers are passed as arguments. So you don't have to consider things like undefined, null, NaN, negative numbers, strings and so on.

Here is a list of functions, we need:

Math.round()
Math.ceil()
Math.floor()

***SOLUTION***:

    Math.round = function(number) {
      const integer = Number(number.toString().match(/^([^.]*)/)[0]);
      return number % 1 < 0.5 ? integer : integer + 1;
    };

    Math.ceil = function(number) {
      const integer = Number(number.toString().match(/^([^.]*)/)[0]);
      return Number.isInteger(number) ? integer : integer + 1;
    };

    Math.floor = function(number) {
      return Number(number.toString().match(/^([^.]*)/)[0])
    };