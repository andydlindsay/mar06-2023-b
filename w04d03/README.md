# W04D03 - AJAX

### To Do
- [x] AJAX
- [x] XMLHttpRequest (XHR) Object
- [x] Build a simple Express server to serve our app
- [x] Use AJAX to retrieve data from our server
- [x] Use jQuery to update the DOM with the retrieved data
- [x] Use AJAX to submit data to our server
- [x] All without refreshing the browser

### AJAX/AJAJ
* Asynchronous Javascript And XML
* turn of the century, users had to refresh to see new info
* Microsoft Outlook
* HTTP requests to a server
* JS will send and receive the responses
* Single Page App (SPA)


```js
$.ajax({
  method: 'GET',
  url: 'http://www.example.com',
  success: (response) => { console.log(response) },
  error: (err) => { console.log(err) }
});

$.ajax({
  method: 'GET',
  url: '/tweets'
}).then((response) => {
  console.log(response);
})
```

CDN => Content Delivery Network



username=alice&password=1234 // urlencoded

eXtensible Markup Language

<user>
  <username>alice</username>
  <password>1234</password>
</user>

{
  "username": "alice",
  "password": "1234"
}




http://localhost:1234/?author=Alice&content=hello















