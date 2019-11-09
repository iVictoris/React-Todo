// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'
import Todo from './Todo'

const TodoList = ({todos = []}) => {
  const todoItems = todos.map((todo) => {
    return (
      <Todo {...todo} />
    )
  })
  return (
    <div>
      {todoItems}
    </div>
  )
}

export default TodoList
