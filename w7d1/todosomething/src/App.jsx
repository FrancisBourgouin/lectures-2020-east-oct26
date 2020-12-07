import React, { useState } from 'react'

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

import './App.scss';

const todoListArr = [
  { title: "Clean the chimney", isComplete: false },
  { title: "Become an egg", isComplete: true },
  { title: "Create a better coffee recipe", isComplete: true },
  { title: "Make my head like poland", isComplete: false },
  { title: "Cook a diner without changing the room's entropy", isComplete: false },
]

function App() {
  const [todos, setTodos] = useState(todoListArr)
  const addTask = (title) => {
    // const newTask = { title, isComplete: false }
    // todoListArr.push(newTask)
    // console.log(newTask, todoListArr)

    const newTodoList = [...todos, { title, isComplete: false }]
    setTodos(newTodoList)
  }

  return (
    <div className="App">
      <TodoList todoList={todos} />
      <TodoForm addTask={addTask} />
    </div>
  );
}

export default App;
