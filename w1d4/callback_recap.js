// Action callback

const yellAString = (value) => {
  let newText = value.toUpperCase()
  console.log(`🔥🔥 ${newText} 🔥🔥`)
}

const listNamesAndDoSomething = (listOfNames, actionCB) => {
  for (const name of listOfNames) {
    actionCB(name)
  }
}

// Named callback
listNamesAndDoSomething(['a', 'b'], yellAString)
// Anonymous callback
listNamesAndDoSomething(['a', 'b'], name => console.log(name))


// Conditional Callback

const minLengthOfSix = (string) => string.length > 6

const listOfStrings = ["SuperPotatoLand", "Mario", "InfiniteSamba", "Life", "Chicken"]

// Anonymous function

listOfStrings.forEach(value => {
  if (minLengthOfSix(value)) {
    console.log(value)
  }
})

// Named function

const condition = value => {
  if (minLengthOfSix(value)) {
    console.log(value)
  }
}

listOfStrings.forEach(condition)