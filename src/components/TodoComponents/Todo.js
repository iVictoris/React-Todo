import React from 'react'

const Todo = ({completed, id, text}) => {
  return (
    <div className={'Todo'.concat(completed ? ' completed' : '')} id={id}>
        <div className='text'>{text}</div>
      </div>
  )
}

export default Todo
