import React from 'react'

const Todo = ({completed, id, text}) => {
  return (
    <div class={`Todo ${completed ? 'completed' : ''}`} id={id} key={id}>
        <div class='text'>{text}</div>
      </div>
  )
}

export default Todo
