# hash === collection of key/value pairs; object, dictionary, associative array

user = {
  "username" => "jstamos",
  "password" => "1234"
}

# puts user
# puts user["username"]

# symbols === lightweight strings (as close as you can get to a primitive)

user = {
  :username => "jstamos",
  :password => "1234"
}

# puts user
# p user[:username]

user = {
  username: "jstamos",
  password: "1234"
}

user[:username] = 'Bob'
user[:new_key] = 'Carol'
