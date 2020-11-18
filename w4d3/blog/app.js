const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const posts = {
  1: {
    id: 1,
    title: "I AM TITLE",
    content: "I AM CONTENT",
    comments: [
      "Wow!",
      "So much content"
    ]
  },
  2: {
    id: 2,
    title: "I AM ALSO TITLE",
    content: "I AM SUPER CONTENT",
    comments: [
      "Vraiment joyeux!",
      "Pouet pouet!"
    ]
  }
}



const app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.get('/posts', (req, res) => {
  // const post = createPost(posts[1])
  // res.send(post)

  res.json(posts)
})

app.post('/posts', (req, res) => {
  const { title, content } = req.body
  const id = Object.keys(posts).length + 1

  const postObject = {
    id,
    title,
    content,
    comments: []
  }

  posts[id] = postObject

  res.send('ok')
})


module.exports = app;
