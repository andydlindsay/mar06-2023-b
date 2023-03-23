# W03D04 - Security & Real World HTTP Servers

### To Do
- [x] Storing passwords
- [x] Encrypted cookies
- [x] HTTP Secure (HTTPS)
- [x] REST
- [x] More HTTP methods
- [x] Method Override [Stretch]

### Hashing
* one way process (cannot be undone)
* 'password' => hashing algo => 'faksdhf234rh0fasdkfha093fadskf'
* salt => randomly generated string
* salt + password => hash => store the output
* 'dasfhajsdhfjahpassword'

### Encryption
* two way process
* symmetrical key => the same key to encrypt and decrypt
* plaintext cookies => encryption algo => encrypted string => res.cookie()
* encrypted cookies => decryption algo => req.session


http://localhost:3000/protected

Monster in the Middle (MitM)

https => http secure
* asymetric encryption
* public key/private key
https://www.google.com/


### REST
* RESTful architecture
* naming convention for routes
* REpresentational State Transfer

GET /all-the-users-in-the-sytem
POST /create-a-new-user
GET /the-comments-from-a-video

Browse  GET   /users
Read    GET   /pins/:id
Edit    POST  /pins/:id
Add     POST  /pins
Delete  POST  /pins/:id/delete

Browse  GET     /users
Read    GET     /pins/:id
Edit    PATCH   /pins/:id  // app.patch('/pins/:id', (req,res)=> {});
Add     POST    /pins
Delete  DELETE  /pins/:id

GET /videos/42/comments
GET /blogposts/5/replies


### More HTTP Methods
* all semantic aliases for POST
* div => article, aside, section, header, footer

PUT => replaces a resource completely
PATCH => replaces a piece of resource
DELETE => deletes a resource


https://www.google.com/search?
q=javascript&
sxsrf=APwXEdc4y6V7mG4uF_HPHDesDUD32b92yw%3A1679597677552&
source=hp&
ei=baAcZPzgHYzK0PEP5KupiAc&iflsig=AOEireoAAAAAZByufSu37aBZlC5vahLpl2PHjR93HTDm&ved=0ahUKEwi8y7r33PL9AhUMJTQIHeRVCnEQ4dUDCAo&uact=5&oq=javascript&gs_lcp=Cgdnd3Mtd2l6EAMyBAgjECcyBAgjECcyBAgjECcyDQgAEIoFELEDEIMBEEMyBwgAEIoFEEMyBwgAEIoFEEMyBwgAEIoFEEMyCAgAEIoFEJECMgcIABCKBRBDMgcIABCKBRBDOgsIABCABBCxAxCDAToLCC4QgAQQsQMQgwE6CAguEIAEELEDOgsIABCKBRCxAxCDAToFCAAQgAQ6BwgAEIAEEAo6BwgjELECECc6DQgAEIAEELEDEIMBEAo6CggAEIAEELEDEApQAFjMEWCiEmgDcAB4AYABzQGIAbMKkgEFNi41LjGYAQCgAQE&sclient=gws-wiz

req.query.source


req.method = req.query._method