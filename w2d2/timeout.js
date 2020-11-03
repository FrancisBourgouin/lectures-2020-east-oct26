// Playing with timeouts

// console.log('Person1: Hello!')

// console.log('Person2: Let me look what I have in the fridge')

// console.log('Person1: What\'s up')

// setTimeout(() => console.log('Person2: Oh I have potatoes, why are they in the fridge'), 1000)

// console.log('Person2: Not much')

const numbers = [1, 5, 2, 10, 6, 12] // MT

console.log('start') // MT
// for (const number of numbers) { // MT
//   setTimeout(() => console.log(number), number * 500) // MT, BB: () => console.log(number)
// }

setTimeout(() => console.log(1), 1)// MT, BB: () => console.log(number)
setTimeout(() => console.log(5), 1)// MT, BB: () => console.log(number)
setTimeout(() => console.log(2), 1)// MT, BB: () => console.log(number)
setTimeout(() => console.log(10), 1)// MT, BB: () => console.log(number)
setTimeout(() => console.log(12), 1)// MT, BB: () => console.log(number)

console.log('finished') // MT