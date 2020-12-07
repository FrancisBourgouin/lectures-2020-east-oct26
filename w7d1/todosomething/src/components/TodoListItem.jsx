import React from 'react'

export default function TodoListItem(props) {
  const { title, isComplete } = props
  // const title = props.title
  // const isComplete = props.isComplete

  const itemStyle = { textDecoration: isComplete ? "line-through" : "" }

  return <li style={itemStyle}>{title ? title : "Seems like the user forgot to type a title"}</li>
}