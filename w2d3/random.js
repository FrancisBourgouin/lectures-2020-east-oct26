setTimeout(() => console.log('lol'), 100)
setTimeout(() => console.log('lol more'), 100)

const arr = [1, 2, 3, 4, 5]

const newArr = []
for (const number of arr) {
  newArr.push(arr * 2)
}

const newnewArr = arr.map(number => number * 2)