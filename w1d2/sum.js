// Sum of all valid elements from the command line arguments

// EXTRACT

// Sum
// Multiple elements
// Validate each element
// Source is the command line args

// PLAN

// Extract the values
// Iteration / Looping over the values (iteration vs for loop)
// Test singular value
// Add it to an accumulator
// Once we're done, return the accumulator
const isItANumber = function (candidate) {
  return !Number.isNaN(Number(candidate))
}

const sumOfCommandLineElements = function () {
  // Extract the values
  const commandLineValues = process.argv
  const truncatedCommandLineValues = commandLineValues.slice(2)
  // Declare the accumulator
  let accumulator = 0
  // Iteration / Looping over the values (iteration vs for loop)
  for (let i = 0; i < truncatedCommandLineValues.length; i++) {
    // Test singular value
    if (isItANumber(truncatedCommandLineValues[i])) {
      // Add it to an accumulator
      accumulator = accumulator + truncatedCommandLineValues[i]
    }
  }
  // Once we're done, return the accumulator
  return accumulator
}

// DONT DO THIS PLEASE!
const sum = function () {
  let a = 0
  process.argv.slice(2).forEach(v => a += Number.isNan(Number(v)) ? v : 0)
  return a
}


// console.log(sumOfCommandLineElements())


// Extract the values
// Prepare the values
// Iteration / Looping over the values (iteration vs for loop)
// Test singular value
// Add it to an accumulator
// Once we're done, return the accumulator

const commandLineValues = process.argv.slice(2)

const sumOfElements = function (listOfElements) {
  let accumulator = 0
  for (let i = 0; i < listOfElements.length; i++) {
    const currentValue = Number(listOfElements[i])
    if (!Number.isNaN(currentValue)) {
      accumulator += currentValue
    }
  }
  return accumulator
}

const sumOfElementsv2 = function (listOfValues) {
  let accumulator = 0
  for (const currentValue of listOfValues) {
    const convertedValue = Number(currentValue)
    if (!Number.isNaN(convertedValue)) {
      accumulator += convertedValue
    }
  }
  return accumulator
}

console.log(sumOfElementsv2(commandLineValues))

// const bob
// const bob

// for (const currentValue of listOfValues) {}

// for(let i = 0; i < listOfValues.length; i++){
//   const currentValue = listOfValues[i]
//   const convertedValue = Number(currentValue)
// }

// {
//   const currentValue = listOfValues[i]
//   const convertedValue = Number(currentValue)
// }
// {
//   const currentValue = listOfValues[i]
//   const convertedValue = Number(currentValue)
// }
// {
//   const currentValue = listOfValues[i]
//   const convertedValue = Number(currentValue)
// }
// {
//   const currentValue = listOfValues[i]
//   const convertedValue = Number(currentValue)
// }
// {
//   const currentValue = listOfValues[i]
//   const convertedValue = Number(currentValue)
// }