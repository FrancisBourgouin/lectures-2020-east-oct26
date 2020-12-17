import { useState, useEffect } from 'react'

export default function Spy(props) {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const reportOnPosition = event => {
    setPosition({ x: event.clientX, y: event.clientY })
    setPosition(prevState => {
      if (prevState.x !== event.clientX || prevState.y !== event.clientY) {
        return { x: event.clientX, y: event.clientY }
      }
    })
  }

  useEffect(() => {
    console.log("SPY HAS ARRIVED MWAHAHAHAHA")
    document.addEventListener('click', reportOnPosition)

    return () => document.removeEventListener('click', reportOnPosition)
  }, [])

  useEffect(() => {
    if ()
  }, [position])
  // execute the content of the useffect, 
  // then look for changes in the dependency array

  return <p onClick={props.deleteSpy}>I AM SPY</p>
}