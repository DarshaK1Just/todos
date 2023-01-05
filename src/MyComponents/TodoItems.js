import React from 'react'

export const TodoItems = ({todo, onDelete}) => {
  return (
    <div>
        <h4>{todo.title}</h4>
        <p>{todo.desc}</p>
        <button className="btn btn-sm btn-danger" onDelete={onDelete}>Delete</button>

    </div>
  )
}
