// What is a callback ?

const singAString = (value) => {
  console.log(`🎵🎶 ${value} 🎶🎵`)
}

// Value is there because we don't know the text yet to put in the console log
const yellAString = (value) => {
  let newText = value.toUpperCase()
  console.log(`🔥🔥 ${newText} 🔥🔥`)
}

// is not a HOF
const listNamesAndSingThem = (listOfNames) => {
  for (const name of listOfNames) {
    yellAString(name)
  }
}

// is an HOF
const listNamesAndDoSomething = (listOfNames, action) => {
  for (const name of listOfNames) {
    action(name)
  }
}

// listNamesAndSingThem(['Pollo', 'Chicken', 'Poulet', 'Chook', 'Dejej', 'Gaina'])
listNamesAndDoSomething(['Pollo', 'Poulet'], yellAString)
// listNamesAndDoSomething(['Pollo', 'Poulet'], singAString)

const judgeAGrade = (grade, subject, minGrade) => {
  if (subject === "Math") {
    if (grade > minGrade) {
      return "Good job."
    } else {
      return "I AM DISAPPOINT"
    }
  }
  if (subject === "History") {

  }
}

const judgeAGradeWithCallback = (grade, subject, conditionCallback) => {
  if (conditionCallback(grade, subject)) {
    return "Good job."
  } else {
    return "I AM DISAPPOINT"
  }
}

const strictParent = (grade, subject) => {
  switch (subject) {
    case "Math":
      if (grade > 90) {
        return true
      } else {
        return false
      }
    case "History":
      if (grade > 97) {
        return true
      } else {
        return false
      }
  }
}

const chillParent = grade => {
  if (grade > 60) {
    return true
  } else {
    return false
  }
}

console.log(judgeAGradeWithCallback(91, "Math", strictParent))
console.log(judgeAGradeWithCallback(91, "Math", chillParent))

const listOfSomething = ["Badaboum", "Patapouf", "Pouet Pouet"]

// HOF => Royalty, CEO

const consoleThatThing = (value1, value2, value3) => console.log(value1, value2, value3)

listOfSomething.forEach(consoleThatThing)
listNamesAndDoSomething(listOfSomething, consoleThatThing)

// Anonymous function -> (value1) => console.log(value1)
listNamesAndDoSomething(listOfSomething, (value1) => console.log(value1))

