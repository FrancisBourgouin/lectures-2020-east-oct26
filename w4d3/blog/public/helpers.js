const fetchPosts = (action) => {
  console.log("LOADING THE POSTS")
  $
    .ajax('/posts')
    .then(res => action(res))
    .catch(err => console.log(err))
    .always(() => console.log("Finished loading, did it work, i dunno"))
}

const submitPost = (event, action) => {
  event.preventDefault()

  $
    .ajax({
      url: "/posts",
      method: "POST",
      data: $('form').serialize()
    })
    .then(res => action(res))
    .catch(err => console.log(err))
}

const createPost = (post) => {
  const title = $('<h1>').text(post.title)
  const text = $('<p>').text(post.content)
  const newArticle = $('<article>')
  newArticle.append(title)
  newArticle.append(text)
  newArticle.addClass('awesome')

  return newArticle
}

const createPostWithFrancisSadWay = post => {
  const htmlSomething = `
    <article>
      <h1>${post.title}</h1>
      <p>${post.content}</p>
    </article>
  `

  return htmlSomething
}

const refreshPosts = (posts, creationMethod) => {
  $('section').empty()
  for (const post of Object.values(posts)) {
    const newArticle = creationMethod(post)
    $('section').append(newArticle)
  }
}
// fetchPosts(refreshPost)

const addLatestPost = (posts, creationMethod) => {
  const post = Object.values(posts).pop()
  // const post = Object.values(posts)[Object.values(posts).length - 1]

  const newArticle = creationMethod(post)
  $('section').append(newArticle)
}


// fetchPosts(addLatestPost)
