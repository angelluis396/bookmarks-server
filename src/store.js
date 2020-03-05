const uuid = require('uuid/v4')

const bookmarks = [
  { id: uuid(),
    title: 'Yahoo',
    url: 'https://www.yahoo.com',
    description: 'Think outside the box',
    rating: 3 },
  { id: uuid(),
    title: 'Google',
    url: 'https://www.google.com',
    description: 'Where we find everything',
    rating: 5 },
  { id: uuid(),
    title: 'MSN',
    url: 'https://msn.com',
    description: 'Bizness stufff',
    rating: 2 },
]

module.exports = { bookmarks }