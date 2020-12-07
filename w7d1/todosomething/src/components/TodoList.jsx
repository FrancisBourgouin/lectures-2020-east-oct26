import React from 'react'

import TodoListItem from './TodoListItem'

export default function TodoList(props) {
  const { todoList } = props
  const parsedTodoList = todoList && todoList.map(todo => <TodoListItem key={todo.title} title={todo.title} isComplete={todo.isComplete} />)
  return <ul>
    {/* <TodoListItem title={todoList[0].title} isComplete={todoList[0].isComplete} /> */}
    {parsedTodoList && parsedTodoList.length ? parsedTodoList : "THIS LIST IS SOOOOO EMPTY"}
  </ul>
}