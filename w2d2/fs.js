const fs = require('fs')

console.log(fs.readFileSync('./littlechicken.txt'))
console.log('start') //MT
fs.readFile('./littledragon.txt', 'utf8', (err, data) => console.log('🐉')) //MT readfile, BB: callback
fs.readFile('./littlechicken.txt', 'utf8', (err, data) => console.log(data)) //MT readfile, BB: callback
console.log('finish') //MT

fs.readFile('...', () => {
  fs.readFile('...', () => {
    // two files
  })
})