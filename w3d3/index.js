const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');
const { fetchUser, authenticateUser } = require('./helpers')
const app = express();
const port = 3000;



const userDatabaseIshArr = [
  {
    nicename: "pollo",
    fullname: "Pequeño Pollo de la Pampa",
    email: "pockpock@chicken.com",
    password: "cluck"
  }
  ,
  {
    nicename: "dimitri",
    fullname: "Dimitri Ivanovich Mendeleiv",
    email: "periodic@table.com",
    password: "vodka"
  }
]

const userDatabaseIshObj = {
  "pockpock@chicken.com": {
    nicename: "pollo",
    fullname: "Pequeño Pollo de la Pampa",
    email: "pockpock@chicken.com",
    password: "cluck"
  }
  ,
  "periodic@table.com": {
    nicename: "dimitri",
    fullname: "Dimitri Ivanovich Mendeleiv",
    email: "periodic@table.com",
    password: "vodka"
  }
}


app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

app.set('view engine', 'ejs')



app.get("/", (req, res) => {
  const email = req.cookies.user

  const templateVars = {}
  const fetchedUser = fetchUser(userDatabaseIshArr, email)
  if (fetchedUser.error) {
    templateVars.user = null
  } else {
    templateVars.user = fetchedUser.user
  }
  res.render("index", templateVars);
});



// LOGIN ROUTES

app.get('/login', (req, res) => {
  const templateVars = { error: null }
  res.render('login', templateVars)
})

app.post('/login', (req, res) => {
  console.log(req.body)
  // const email = req.body.email
  // const password = req.body.password
  const { email, password } = req.body
  const fetchedUserInfo = authenticateUser(userDatabaseIshArr, email, password)

  if (fetchedUserInfo.error) {
    console.log(`There was this error : ${fetchedUserInfo.error}`)
    // return res.redirect('/login')
    const templateVars = { error: fetchedUserInfo.error }
    return res.render('login', templateVars)
  } else {
    res.cookie('user', fetchedUserInfo.user.email)
    return res.redirect('/')
  }
  // userDatabaseIshObj[email].password === password
})

// REGISTER ROUTES
app.get('/register', (req, res) => {
  res.render('register')
})
app.post('/register', (req, res) => {
  const { email, password, nicename, fullname } = req.body

  const fetchedUser = fetchUser(userDatabaseIshArr, email)
  if (fetchedUser.error) {
    const newUser = {
      nicename,
      fullname,
      email,
      password
    }
    userDatabaseIshArr.push(newUser)
    res.cookie('user', email)
    res.redirect('/')
  } else {
    const templateVars = { error: "Email already exists, please login" }
    res.render('login', templateVars)
  }

})

// LOGOUT ROUTE
app.get('/logout', (req, res) => {
  res.clearCookie('user')
  res.redirect('/')
})










app.get('/allthecookies', (req, res) => {
  console.log(req.headers)
  res.cookie('chicken', true)
  res.cookie('carrots', true)
  res.cookie('potatoes', true)
  res.send('OK')
})

app.get('/userpartay', (req, res) => {
  console.log(req.cookies)
  const someUser = {
    name: "Bob",
    password: "1234"
  }

  res.cookie('user', JSON.stringify(someUser))
  res.send('YAS')
})


app.listen(port, () => console.log(`Express server running on port ${port}`));
