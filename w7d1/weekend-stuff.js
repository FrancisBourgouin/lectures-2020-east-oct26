const showNameTag = (name) => {
  console.log("--------------------")
  console.log("  Hello my name is  ")
  console.log(`${name}`)
  console.log("--------------------")
}

// showNameTag("Natalia")


const nameTag = (name) => {
  let currentName = name
  const showNameTag = () => {
    console.log("--------------------")
    console.log("  Hello my name is  ")
    console.log(`${currentName}`)
    console.log("--------------------")
  }
  const storeNameTag = () => {
    const output = []
    output.push("--------------------")
    output.push("  Hello my name is  ")
    output.push(`${currentName}`)
    output.push("--------------------")

    return output
  }
  const changeName = (newName) => {
    currentName = newName
  }

  return { showNameTag, storeNameTag, changeName }
}

const bob = nameTag('chicken')
const pollo = nameTag('pollo')
pollo.changeName("Wiggle wiggle")
console.log(bob)
bob.showNameTag()
bob.changeName("poulet")
bob.showNameTag()