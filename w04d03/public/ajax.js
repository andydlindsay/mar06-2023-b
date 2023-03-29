console.log('hello');

// $.ajax({
//   method: 'GET',
//   url: 'https://my-json-server.typicode.com/andydlindsay/chef-andy/recipes',
//   success: (response) => {
//     console.log(response);
//   }
// });

// $.ajax({
//   method: 'GET',
//   url: 'https://my-json-server.typicode.com/andydlindsay/chef-andy/recipes',
// }).then((response) => {
//   console.log(response);
// });

$.ajax({
  method: 'GET',
  url: '/tweets',
}).then((response) => {
  console.log(response);
});
