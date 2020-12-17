// Classes in JavaScript

// Objects with methods & a constructor
// Blueprints
// Starts with capital letter
// Extend objects

// syntactic sugar on top of prototypes

//

class Car {
  constructor(name) {
    this.name = name ? name : "Somebody doesn't know what to pick"
  }
  accelerate = () => {
    console.log(`The ${this.name} goes vrooommmmm!`)
  }

  turn = (side) => {
    console.log(`turning on the ${side} side`)
  }

  cook = (element, isSunny) => {
    if (isSunny) {
      console.log(`Cooking at high heat ${element}`)
    } else {
      console.log(`Cooking at low heat ${element}`)
    }
  }
}

class spaceCar extends Car {

  eject = () => {
    console.log(`Bob was not the impostor`)
  }
}

const toyotaAE86 = new Car("Nocturnal tofu delivery car")
const mandalorian = new Car("Mando & Grogu")

const someSpaceship = new spaceCar("HAL 9000")

toyotaAE86.cook("potatoes", true)
mandalorian.cook("stormtroopers", false)

toyotaAE86.accelerate()

console.log(someSpaceship)

someSpaceship.eject()
someSpaceship.turn("right")