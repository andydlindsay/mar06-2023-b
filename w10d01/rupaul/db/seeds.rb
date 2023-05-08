# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "starting the seeds"

puts "create the queens"

15.times do
  queen = Queen.create(
    name: Faker::TvShows::RuPaul.queen
  )
end

puts "retrieve the newly created queens"

queens = Queen.all

puts "creating the quotes"

50.times do
  Quote.create(
    quote: Faker::TvShows::RuPaul.quote,
    queen: queens.sample
  )
end

puts "all done!"
