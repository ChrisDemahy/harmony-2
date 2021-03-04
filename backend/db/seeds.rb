# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Message.destroy_all
User.destroy_all
Chatroom.destroy_all

u1 = User.create(username: 'chris', password: 'abc123')
u2 = User.create(username: 'mike', password: 'abc123')

c1 = Chatroom.create(name: 'Main Chat')

m1 = Message.create(user: u1, chatroom: c1, content: 'Hello!')
