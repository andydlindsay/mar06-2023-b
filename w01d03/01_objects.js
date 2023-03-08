// const studentOneName = 'alice';
const studentOneCohort = 'mar06 2023';
// const studentOneGraduated = false;

const studentOne = ['alice', 'mar06 2023', false];
studentOne[1]

// data structure = collection of "like" data

const studentTwoName = 'bob';

const studentTwoHundredAndFortySixName = 'Carol';

const str = ''; // string literal
const arr = [1, 2, 3]; // array literal
const i = 0;
arr[i];
arr[0] = 'hello'; // ['hello']
arr[0] = 'bye'; // ['bye']
arr[0] // 'bye'
arr[100] // undefined
// console.log(arr);

// object == collection of key/value pairs; hash, dictionaries, associative arrays
const obj = {
  cohort: "mar06 2023",
  graduated: false,
  friends: [],
  bff: {}
};

// obj['4hello'] = 'does this work???';

obj['name'] = 'alice';
console.log('name', obj['name']);

const key = 'name';
obj[key] = 'carol';
obj.key = 'carol';
console.log(obj);
// obj['name'] = 'bob';

// console.log(obj);
// obj['friends']; // undefined
// console.log(obj['friends']);

// console['log']('reallly??');

// musicLibrary['tracks']['abc']['artist'] // shania twain
// musicLibrary.tracks.abc.artist // sia