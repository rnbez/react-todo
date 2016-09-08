import React, { PropTypes } from 'react'

const Todo = ({ onClick, completed, text }) => (
  <li>
    <span
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
    >
    {text}
    </span>
    <span style={{
      cursor: 'pointer',
      color: 'red',
      fontWeight: 'bold',
      paddingLeft: '10px' 
    }}
     >x</span>
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
