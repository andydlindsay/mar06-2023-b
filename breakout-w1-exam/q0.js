/* Question 0
 *
 *  Implement the functions defined below
 *
 */

/* ===========================================================================
 * COUNT - the number of items in a list
 *
 * For example:
 *
 *    count([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    9
 */
const count = function(arr) {
  const length = arr.length;
  return length;
};

/* ===========================================================================
 * SUM - the sum of the numbers in a list
       - safe to assume that all items are numbers already
 *
 * For example:
 *
 *    sum([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    36
 */
const sum = function(arr) {
  // with reduce?

  const answer = arr.reduce((runningTotal, num) => {
    return runningTotal + num;
  }, 0);

  return answer;

  // create space to record a running total
  // let runningTotal = 0; // undefined

  // // loop through the provided array
  // for (const num of arr) {
  //   // take the num from the array and add to our running total
    // runningTotal = runningTotal + num;
    // runningTotal += num;
  // }

  // // return the running total
  // return runningTotal;
};

// To be used by mean. Do not alter.
const round = function(number) {
  return Math.round(number * 100) / 100;
};

/* ===========================================================================
 * MEAN - the average value of numbers in a list
 *      - use the provided 'round' function when returning your value
 *      - if empty array, return null to indicate that mean cannot be calculated
 *
 * For example:
 *
 *    mean([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    4
 */
const mean = function(arr) {
  if (arr.length === 0) {
    return null;
  }

  // avg = sum / numOfElements
  const sumOfElements = sum(arr);
  const countOfElements = count(arr);

  const avg = sumOfElements / countOfElements;

  return round(avg);
  // return avg;
};

// Don't change below:
module.exports = { count, sum, mean };
