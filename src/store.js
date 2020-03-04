const uuid = require('uuid/v4');

const bookmarks = [
  {
    id: uuid(),
    title:"Google",
    url: "https://google.com",
    rating: 5
  },

  {
    id: uuid(),
    title: "MSN",
    url: "https://msn.com",
    rating: 2
  },
];

module.exports = { bookmarks };