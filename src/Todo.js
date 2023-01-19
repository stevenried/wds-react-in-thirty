import React from 'react'

export default function Todo({ todo }) {
  return (
    <li className="todo-item">
      <input
        type="checkbox"
        name="completed-check-box"
        id="completedCheckBox"
        defaultChecked={todo.isComplete}
      />
      <label>{todo.desc}</label>
    </li>
  )
}
