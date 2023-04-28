# blocks of code are denoted with a do..end
i = 0

# loop do
#   i += 1

#   puts "hello #{i}"

#   # if (i > 10)
#   #   break
#   # end
  
#   break if (i > 10)
# end


num = 0

# while (num < 10) do
#   num += 1

#   puts "hello #{num}"
# end

game_over = false

# while (!game_over) do

# end

# until (game_over) do

# end

names = ['alice', 'bob', 'carol']

# names.pop()
# names.push('dean')

# names.forEach((name, index) => {});
# names.each do |name|
#   p "hello there #{name}"
# end

# names.each_with_index do |name, index|
#   p "hello there #{name} and you are at #{index}"
# end

names = ['alice', 'bob', 'carol']

# JS for..of === Ruby for..in

for name in names do
  puts "hello there #{name}"
end
