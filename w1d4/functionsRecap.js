// How can we declare a function?

function thisIsBadButNotThatBadJustNotFun() {
  // is hoisted
}

const someFunction = function () {
  // Function expression
}

const arrowFunction = () => {
  // Function expression
  // Simplified syntax
}

const oneParameter = param => {

}

const twoParameters = (param, param2) => {

}

const oneLiner = (param) => param * 2

const isItANumber = function (candidate) {
  return !Number.isNaN(Number(candidate))
}

const isItANumberArrow = candidate => !Number.isNaN(Number(candidate))

const coolFunction = (p1, p2, p3, p4) => {
  return p1 + p2 + p3 + p4
}

const addUpToFourValues = (a, b, c, d) => {
  let accumulator = 0
  if (a) {
    accumulator += a
  }
  if (b) {
    accumulator += b
  }
  if (c) {
    accumulator += c
  }
  if (d) {
    accumulator += d
  }
}

// How do we reference a function?

console.log(isItANumberArrow)

// How do we call a function?

isItANumberArrow()

coolFunction(1, 2)


// 

const singAString = (value) => {
  console.log(`🎵🎶 ${value} 🎶🎵`)
}

singAString('Hi Class')

const listNamesAndSingThem = (listOfNames) => {
  for (const name of listOfNames) {
    singAString(name)
  }
}

listNamesAndSingThem(['Pollo', 'Chicken', 'Poulet', 'Chook', 'Dejej', 'Gaina'])