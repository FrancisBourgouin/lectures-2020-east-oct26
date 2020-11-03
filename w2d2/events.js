const EventEmitter = require('events');

class MyEmitter extends EventEmitter { }
class AnotherEmitter extends EventEmitter { }

const conversationEmitter = new MyEmitter();


// Three potential events
// greeting
// howareyou
// weathertalk

conversationEmitter.on('greeting', () => {
  console.log('Hi!');
});

conversationEmitter.on('howareyou', () => {
  console.log('Oh you know, pretty good considering these days');
});

conversationEmitter.on('weathertalk', () => {
  console.log('Oh it\'s getting cold, and the sun goes down so soon!');
});

conversationEmitter.on('awkward', () => {
  console.log('....');
});

// setTimeout(() => conversationEmitter.emit('greeting'), 1000)
// setTimeout(() => conversationEmitter.emit('awkward'), 1500)
// setTimeout(() => conversationEmitter.emit('howareyou'), 2000)
// setTimeout(() => conversationEmitter.emit('awkward'), 2500)
// setTimeout(() => conversationEmitter.emit('weathertalk'), 4000)
// setTimeout(() => conversationEmitter.emit('awkward'), 4500)


const kitchenRunner = new AnotherEmitter();
// Kitchen
// hungry
// lookinfridge
// eat

kitchenRunner.on('hungry', () => {
  console.log('*grumble*')
  setTimeout(() => kitchenRunner.emit('lookinginfridge'), 2000)
})
kitchenRunner.on('lookinginfridge', () => {
  console.log('Mmmm....')
  setTimeout(() => kitchenRunner.emit('eat'), 1000)
})
kitchenRunner.on('eat', () => {
  console.log('munch munch')
})

kitchenRunner.emit('hungry')
setInterval(() => kitchenRunner.emit('hungry'), 6000)

