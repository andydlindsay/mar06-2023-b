// looping through arrays: c-style loop, for..of, for..in, forEach
// looping through object: for..in
// use for..of with everything except objects because Of and Object both start with 'O'

// const users = ['alice', 'bob', 'carol'];

// for (const index in users) {
//   console.log('index', index);
//   console.log('users[index]', users[index]);
// }

const myObj = {
  color: 'red', 
  subObj: {
    color: 'pink',
    type: 'hello'
  },
  flavour: 'sour', 
  price: 2.90,
};

myObj.color = 'orange';
myObj.color

for (const element of arr) {
  for (const key in element) {
    
  }
}

for (const key in myObj) {
  console.log('key', key);
  console.log('myObj[key]', myObj[key]);

  const value = myObj[key];
  if (typeof value === 'object') {
    // console.log('we found a subobject');
    for (const subKey in value) {
      console.log('subKey', subKey);
      console.log('subValue', value[subKey]);
    }
  }
}