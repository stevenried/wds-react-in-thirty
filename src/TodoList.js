import React from 'react'
import Todo from './Todo'
import styles from './TodoList.module.css'

export default function TodoList({ todos }) {
  return (
    <ul className={styles['todo-list']}>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </ul>
  )
}
