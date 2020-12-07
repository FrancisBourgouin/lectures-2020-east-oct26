import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import TodoList from '../components/TodoList'
import TodoListItem from '../components/TodoListItem'
import TodoForm from '../components/TodoForm'

const todoListArr = [
  { title: "Clean the chimney", isComplete: false },
  { title: "Become an egg", isComplete: true },
  { title: "Create a better coffee recipe", isComplete: true },
  { title: "Make my head like poland", isComplete: false },
  { title: "Cook a diner without changing the room's entropy", isComplete: false },
]

storiesOf('TodoList Item', module)
  .add('Default', () => <TodoListItem title="I am a todo list item" />)
  .add('Empty', () => <TodoListItem title="" />)
  .add('Completed', () => <TodoListItem title="I am a completed todo list item" isComplete={true} />)

storiesOf('TodoList', module)
  .add('Default', () => <TodoList todoList={todoListArr} />)
  .add('Empty', () => <TodoList todoList={[]} />)
  .add('Without todoList prop', () => <TodoList />)

storiesOf('TodoForm', module)
  .add("Basic", () => <TodoForm />)
  .add("With action", () => <TodoForm addTask={action("send data")} />)