// const num = 5;

// // a copy of the primitive is made
// const changeNum = function(number) {
//   number = 10;
//   console.log('inside the function', number); // 10
// };

// console.log('num before', num); // 5
// changeNum(num);
// console.log('num after', num); // 5

const student = {
  name: 'alice',
  cohort: 'mar06 2023'
};

// objects are passed by reference; which means the function gets the actual object
const changeObj = function(obj) {
  obj.name = 'bob';
  console.log('inside the function', obj); // bob
};

console.log('before the call', student); // alice
changeObj(student);
console.log('after the call', student); // bob
