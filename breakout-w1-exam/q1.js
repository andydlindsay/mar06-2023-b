/* Question 1
 *
 *  Implement the functions defined below
 *
 */

/* ===========================================================================
 * MIN - the lowest value in a list
 *
 * For example:
 *
 *    min([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    0
 */
const min = function(arr) {
  // create a place in memory to hold lowest value seen
  let lowest = arr[0];

  // loop through the provided array
  arr.forEach((element) => {
    // is the current element lower than our lowest value
    if (element < lowest) {
      // replace our lowest value with the current element
      lowest = element;
    }
  });

  // return lowest value seen
  return lowest;
};


/* ===========================================================================
 * MAX - the highest value in a list
 *
 * For example:
 *
 *    max([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    9
 */
const max = function(arr) {
  // return Math.max(...arr);

  // set aside a place in memory for our highest value
  let highestVal = arr[0];

  // loop through the provided array
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];

    // is the current element higher than our highest value
    if (element > highestVal) {
      // replace the highest value with current element
      highestVal = element;
    }
  }

  // return highest value
  return highestVal;
};

/* ===========================================================================
 * RANGE - the difference between the highest and lowest values in a list
 *
 * For example:
 *
 *    range([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    9
 */
const range = function(arr) {
  const highest = max(arr);
  const lowest = min(arr);

  return highest - lowest;
};

// Don't change below:

module.exports = { min, max, range };
