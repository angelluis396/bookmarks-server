const express = require('express');
const bookmarksRouter = express.Router();
const bodyParser = express.json();
const uuid = require('uuid/v4');
const logger = require('../logger');
const {bookmarks} = require ('../store');

bookmarksRouter
.route('/bookmarks')
  .get((req, res) => {
    res.json(bookmarks);
  })
  .post(bodyParser, (req, res) => {
    const { title, url } = req.body
    if(!title) {
      logger.error(`Title is required`);
        return res;
    }
    if(!url) {
      logger.error(`URL is required`);
        return res;
    }
  })

bookmarksRouter
  .route('/bookmarks/:id')
  .get((req, res) => {
    const { id } = req.params;
    const bookmark = bookmarks.find(bookmark => bookmark.id == id);
    if(!bookmark) {
      logger.error(`Bookmark with id ${id} not found.`);
      return res  
        .status(404)
        .send('Bookmark not found')
    }
    res.json(bookmark)
  })

  .delete((req, res) => {
    const { id } = req.params;
    const bookmarkIndex = bookmarks.findIndex(bookmark => bookmark.id == id);
    if (bookmarkIndex === -1) {
      logger.error(`Bookmark with id ${id} not found.`)
      return res  
        .status(404)
        .send('Not Found')
    }
    bookmarks.splice(bookmarkIndex, 1);
    logger.info(`Bookmark with id ${id} was deleted.`);
    res
      .status(204)
      .end()

  })

  module.exports = bookmarksRouter;