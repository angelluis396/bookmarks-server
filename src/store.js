const uuid = require('uuid/v4');

const bookmarks = [
  {
    id: uuid(),
    title:"Google",
    url: "https://google.com"
  },

  {
    id: uuid(),
    title: "MSN",
    url: "https://msn.com"
  },
];

module.exports = { bookmarks };