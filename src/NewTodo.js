import React from 'react'
import NewTodoForm from './NewTodoForm'

function NewTodo({ onNewTodo }) {
  function saveTodoDataHandler(enteredTodoData) {
    onNewTodo(enteredTodoData)
  }
  return <NewTodoForm onSaveTodoData={saveTodoDataHandler} />
}

export default NewTodo
