$(document).ready(() => {

  console.log(document)

  const list = document.getElementById('main-list')
  const h1OfList = list.getElementsByTagName('h1')[0]


  // jQuery TIME ! :D

  // $( "target" ).html() // read
  // $( "target" ).html('new content') // write

  $("ul").append("<li> Magic !</li>")
  $("ul").prepend("<li> Magic-errr !</li>")

  $('h1').css('color', 'blue')

  for (const h1 of document.querySelectorAll('h1')) {
    h1.style.color = 'blue'
  }


  // for (const h1 of $('h1'))

  // STOP THE FOOORRRMM

  const form = document.querySelector('form')
  form.addEventListener('submit', event => {
    event.preventDefault()

    console.log(event.target.querySelector('input').value)

    const text = document.createTextNode(event.target.querySelector('input').value)
    const element = document.createElement('li')
    element.innerHTML = text

    document.querySelector('ul').innerHTML.append(element)

  })

  $('form.story').on('submit', event => {
    event.preventDefault()

    console.log($(event.target).find('input').val())
    const text = $(event.target).find('input').val()

    const newListItem = $('<li>').text(text)

    $('ul').append(newListItem)
  })

})

// ul.list-item

// $('button').on('click') equivalent to $('button').click()