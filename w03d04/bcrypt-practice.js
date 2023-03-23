const bcrypt = require('bcryptjs');

const password = '1234';

// bcrypt.genSalt(10, (err, salt) => { console.log(salt) })
// bcrypt.genSalt(10).then((salt) => { console.log(salt) });

const salt = bcrypt.genSaltSync(10);
// console.log('salt', salt);

const hash = bcrypt.hashSync(password, salt);
// console.log('hash', hash);

const storedHash = '$2a$10$e2fSJdDylqrIblsKYE7tP.gpR7enEE30CgeWPPnysJFxO.hmI8TdG';

const result = bcrypt.compareSync('1234', storedHash);
console.log(result);
