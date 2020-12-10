import React, { useState } from 'react'

export default function CityForm(props) {
  const { updateCity } = props
  const [city, setCity] = useState("")
  const [formState, setFormState] = useState({
    city: "",
    province: "",
    country: ""
  })

  const handleChange = (event) => {
    const valueTyped = event.target.value
    if (valueTyped.length < 50) {
      setCity(valueTyped)
    }
  }

  const handleChangeIfItsAnObject = (event) => {
    const newFormData = { ...formData }
    newFormData[event.target.name] = event.target.value

    setFormData(newFormData)
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    props.updateCity(city)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="city" placeholder="Enter your cityyy" onChange={handleChange} />
      <input type="text" name="city2" placeholder="Enter your cityyy" onChange={handleChange} />
      <button type="submit">Find the weather!</button>
    </form>
  )
}