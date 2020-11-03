// Function & Callback recap

// Functions

function dontDoThis() {

}

const coolFunction = function () {
  // ...
}

const coolerFunctionMaybe = () => {
  // ...
  // return
}

const implicitReturn = () => 2 + 2


// implicitReturn vs implicitReturn()
// referencing         calling

const remainderOfTheEntireDivision = (number, divider) => number % divider


const consoleThatThing = (value) => console.log('That Thing', value)

const value = remainderOfTheEntireDivision(13, 3)

consoleThatThing(value)
consoleThatThing(remainderOfTheEntireDivision(13, 5))
consoleThatThing((number, divider) => number % divider)
consoleThatThing(((number, divider) => number % divider)(13, 11))


// ((value) => console.log('That Thing', value))('bob')
// Callbacks

const fireNumber = number => console.log(`🔥${number}🔥`)
const repeatNumber = (number, amount) => {
  for (let i = 0; i < amount; i++) {
    console.log(`🔥${number}🔥`)
  }
}
const repeatFiveTimes = number => repeatNumber(number, 5)

const listNumbersAndAction = (list, action) => {
  for (const number of list) {
    action(number)
  }
}

// listNumbersAndAction([1, 2, 3, 4, 5], fireNumber)
listNumbersAndAction([1, 2, 3, 4, 5], number => repeatNumber(number, 5))


const undefinedNameInverterArrow = () => nameInverter(undefined)
const undefinedNameInverterArrow = function () { return nameInverter(undefined) }
// assert.throw(undefinedNameInverter)
// assert.throw( () => nameInverter(undefined))

const simpleErrorsOfLife = () => {
  throw new Error('AH MAH GAWD')
}


const assertThrow = function (functionToTestCB, returnType, errorMessage) {
  try {
    functionToTestCB()
    return 'SADNESS'
  } catch (error) {
    console.log(error.name, error.type, error.message)
    if (error.name === returnType && errorMessage === error.message) {
      return 'SUCESS !'
    }
  }

}

console.log(assertThrow(() => simpleErrorsOfLife('something'), 'Error', 'AH MAH GAWD'))