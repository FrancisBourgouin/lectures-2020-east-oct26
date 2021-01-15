const express = require('express');
const urls = express.Router();

/* GET users listing. */
urls.get('/', function (req, res, next) {
  res.json([
    { shortUrl: "...", longUrl: "....somethingelese" },
    { shortUrl: "...", longUrl: "....somethingelese" },
    { shortUrl: "...", longUrl: "....somethingelese" },
    { shortUrl: "...", longUrl: "....somethingelese" },
    { shortUrl: "...", longUrl: "....somethingelese" },
    { shortUrl: "...", longUrl: "....somethingelese" },
    { shortUrl: "...", longUrl: "....somethingelese" },
    { shortUrl: "...", longUrl: "....somethingelese" },
  ])
});

module.exports = urls;
