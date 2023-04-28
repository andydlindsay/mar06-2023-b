# block is denoted with do..end
# proc (procedure) is a stored block in memory
# lambda is a proc that cares about how many args get passed to it

names = ['alice', 'bob', 'carol']

# names.each do |name|
#   puts "hello there #{name}"
# end

# puts

# my_block = Proc.new do |name|
#   puts "hello there #{name}"
# end

# names.each &my_block

# [1, 2, 3].each &my_block

# blocks are accepted into methods "invisibly"
def accepting_block
  puts "before the yield"
  yield("snowing", "yellow", 42) # callback()
  puts "after the yield"
end

my_new_block = lambda do |weather|
  puts "good day! it is #{weather} outside"
end

accepting_block &my_new_block
