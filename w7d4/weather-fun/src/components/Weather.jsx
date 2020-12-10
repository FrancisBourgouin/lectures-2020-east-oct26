import React from 'react'

export default function Weather(props) {
  const { description, city, icon } = props
  return (
    <h1 className="Weather">
      <img src={icon} />
      <span>The weather is {description} currently in {city}.</span>
    </h1>
  )
}