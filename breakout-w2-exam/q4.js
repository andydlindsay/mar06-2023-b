"use strict";

/* Question 04

Implement the function as defined below.

Given an array of values, the minmax() function will return an array that
contains the minimum and maximum values in the array, always with minimum
at index 0 and maximum at index 1. For the purposes of this question, you
are not allowed to use Math.max() or Math.min().

The array can be a list of lower-cased strings instead of numbers. In this
case, min is the string that would be sorted first alphabetically and max
is the string that would be sorted last alphabetically ("a" < "b", while
"ab" > "aa", and so on).

Mixed-type (strings and numbers) arrays are not of concern to us (meaning,
  do not worry about this situation).

Examples:

- minmax([1, 2, 3, 4, 5]) returns [1, 5]
- minmax([90, 89, 123, 3]) returns [3, 123]
- minmax(["apple", "banana", "canada"]) returns ["apple", "canada"]
- minmax([]) returns [undefined, undefined]

*/

const minmax = function(list) {
  // sort the provided array

  if (typeof list[0] === 'string') {
    list.sort(); // strings
  } else {
    list.sort((a, b) => { // numbers
      return a - b;
    });
  }

  // grab the 0th and the last element and return them
  const first = list[0];
  const last = list[list.length - 1];

  return [first, last];
};

// Don't change below:

module.exports = { minmax };
