import React from 'react'

export default function TodoForm(props) {
  const handleSubmit = (event) => {
    event.preventDefault()
    props.addTask && props.addTask("AWESOME TASSSSSKKKKKEEEEE")
  }
  return <form onSubmit={handleSubmit}>
    <input type="text" name="title" placeholder="Enter title of task" />
    <button type="submit">Add task!</button>
  </form>
}