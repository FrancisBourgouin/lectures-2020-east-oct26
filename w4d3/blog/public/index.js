$(document).ready(() => {

  $('form').on('submit', event => {
    const createHTMLPost = posts => addLatestPost(posts, createPost)
    const fetchAndUpdate = () => fetchPosts(createHTMLPost)
    submitPost(event, fetchAndUpdate)
  })

  $('#refresh').on('click', event => {
    const createHTMLPost = posts => refreshPosts(posts, createPost)
    fetchPosts(createHTMLPost)
  })

})



// $(document).ready(() => {

//   $('form').on('submit', event => {
//     // event.preventDefault()

//     // // $('input').on('change, keyUp, keyDown, keyPress')

//     // console.log(
//     //   $('form input').val(),
//     //   $('form textarea').val(),
//     //   $('form').serialize()
//     // )

//     // $
//     //   .ajax({
//     //     url: "/posts",
//     //     method: "POST",
//     //     data: $('form').serialize()
//     //   })
//     //   .then(res => console.log(res))
//     const fetchAndUpdate = () => fetchPosts(addLatestPost)
//     submitPost(event, fetchAndUpdate)

//   })

//   // $('input').on('keyup', event => console.log(`keyUp: ${event}`))
//   // $('input').on('keydown', event => console.log(`keyDown: ${event}`))
//   // $('input').on('keypress', event => console.log(`keyPress: ${event}`))


//   $
//     .ajax('/posts')
//     .then(res => console.log(res))

//   // $
//   //   .ajax({
//   //     url: "/posts",
//   //     method: "POST",
//   //     data: "....."
//   //   })
//   //   .then(res => console.log(res))



//   $('#refresh').on('click', () => {
//     //   $
//     //     .ajax({
//     //       url: "/posts",
//     //       method: "GET"
//     //     })
//     //     .then(res => {
//     //       $('section').empty()
//     //       for (const post of Object.values(res)) {
//     //         const newArticle = $('<article>').text(post.content)
//     //         $('section').append(newArticle)

//     //       }
//     //     })
//     // })
//     fetchPosts(refreshPosts)

//   })

//   $('#refresh').on('click', event => fetchPosts(refreshPosts))

// })