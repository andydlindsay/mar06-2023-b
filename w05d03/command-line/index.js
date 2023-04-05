const pg = require('pg');

const Client = pg.Client; // single connection to the database
// const Pool = pg.Pool; // collection of clients (5); managed

const config = {
  host: process.env.DB_HOST,
  name: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT,
};

const client = new Client(config);

client.connect();

// console.log(process.argv);
const verb = process.argv[2];
const id = process.argv[3];
// console.log('verb', verb);

switch (verb) {
  case 'browse': // if (verb === 'browse')
    client.query('SELECT * FROM movie_villains ORDER BY id;')
      .then((response) => {
        console.log(response.rows);
        client.end();
      });
    break;

  case 'read':
    client.query('SELECT * FROM movie_villains WHERE id = $1', [id])
      .then((response) => {
        console.log(response.rows[0]);
        client.end();
      });
    break;

  case 'edit':
    const newName = process.argv[4];
    client.query('UPDATE movie_villains SET villain = $1 WHERE id = $2;', [newName, id])
      .then(() => {
        console.log('villain updated successfully');
        client.end();
      });
    break;

  case 'add':
    const villainName = process.argv[3];
    const movie = process.argv[4];
    const query = 'INSERT INTO movie_villains(villain, movie) VALUES($1, $2);';

    client.query(query, [villainName, movie])
      .then(() => {
        console.log(`there's a sad backstory for ${villainName}`);
        client.end();
      });
    break;

  case 'delete':
    client.query('DELETE FROM movie_villains WHERE id = $1;', [id])
      .then(() => {
        console.log('the villain has gone through a redemption arc');
        client.end();
      });
    break;

  default:
    console.log('please use a BREAD verb');
    client.end();
}




