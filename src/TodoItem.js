import React from 'react'

function TodoItem({ data, onDelete, onEdit }) {

  return (
    <div>
      <h4>{data.title}</h4>
      <p>{data.desc}</p>
      <button onClick={() => onDelete(data.id)}>Delete</button>
      <button onClick={() => onEdit(data.id)}>Edit</button>
    </div>
  )
}

export default TodoItem