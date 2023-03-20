/* Question 3
 *
 *  Implement the 'mode' function defined below
 *
 * MODE - the most frequently occurring number
 *      - for this test, the provided lists will only have a single value for the mode
 *
 * For example:
 *
 *    mode([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    6
 */

const mode = function(arr) {
  /* IMPLEMENT ME */
  let occur = {};
  let mostOccur = 0;
  let result = {
    number: arr[0]
  };
  for (let element of arr) {
    if (occur[element]) {
      occur[element] += 1;
      if (occur[element] > mostOccur) {
        mostOccur = occur[element];
        result.number = element;
      }
    } else {
      occur[element] = 1;
    }
  }
  return result.number;
};

// const mode = function(arr) {
//   // create the piles

//   // create a place in memory to hold our piles of "cards"
//   const piles = { };

//   // loop through the provided array
//   for (const index in arr) {
//     const element = arr[index];

//     // have we seen this element/number before?
//     if (piles[element]) {
//       // if yes, increment the number of times seen
//       piles[element] += 1;
//     } else {
//       // if no, we need to create the "pile" in the piles object
//       piles[element] = 1;
//     }
//   }

//   // console.log(arr);
//   // console.log(piles);

//   // create space in memory for highest value and highest key seen so far
//   let highestValue = 0;
//   let highestKey = null;

//   // look through the piles
//   for (const key in piles) {
//     // grab the value from the piles object
//     const value = piles[key];

//     // is the value higher than our highest?
//     if (value > highestValue) {
//       // if yes, replace highestValue and highestKey
//       highestValue = value;
//       highestKey = key;
//     }
//   }

//   // return the highest key
//   // '5' 5
//   return Number(highestKey);
// };

// Don't change below:
module.exports = { mode };
