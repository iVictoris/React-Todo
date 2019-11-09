import React from 'react'

const Todo = ({completed, id, text, updateTodo}) => {
  return (
    <div className={'Todo'.concat(completed ? ' completed' : '')} id={id} onClick={(e) => updateTodo(id, 'complete')}>
        <div className='text'>{text}</div>
      </div>
  )
}

export default Todo
