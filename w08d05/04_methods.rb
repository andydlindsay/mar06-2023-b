# x => x + 2
def say_hello name, age = 24
  puts "hello there #{name} and you are #{age}"

  "anything you want"
end

return_val = say_hello 'alice', 42
# say_hello 'bob'
p return_val
