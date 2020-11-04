const net = require('net')

const listOfClients = []

const broadcast = (listOfClients, message, id) => {
  console.log(id)
  for (const client of listOfClients) {
    if (client.id !== id) {
      client.write(message)
    }
  }
}

const generateRandomId = () => Math.floor(Math.random() * 2000)

const addClientToList = (client) => {
  listOfClients.push(client)
}
const monique = net.createServer()

// On the event of a listening event, do the callback
monique.on('listening', () => console.log('Monique is listening a lot'))

// On the event of a connection, monique wants to log the fact that someone connected
// monique.on('connection', client => client.id = generateRandomId())
// monique.on('connection', addClientToList)

// monique.on('connection', () => console.log(`Somebody connected. Meow. ${listOfClients.length} clients online`))
// monique.on('connection', (client) => {
//   // console.log(client)
//   client.write('WAZZAA \n')
//   client.setEncoding('utf-8')
//   client.on('data', data => console.log(data))

//   // 🦜 parrot mode
//   client.on('data', data => broadcast(listOfClients, data, client.id))
// })


monique.on('connection', (client) => {
  client.id = generateRandomId()
  addClientToList(client)
  client.write('WAZZAA \n')
  client.setEncoding('utf-8')


  client.on('data', data => console.log(data))
  // 🦜 parrot mode
  client.on('data', data => broadcast(listOfClients, data, client.id))
})

monique.listen(1337, () => {
  // Triggered by the listening event
  console.log('Monique is listening')
})


setTimeout(() => monique.close(), 2000)