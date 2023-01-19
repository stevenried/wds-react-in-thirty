import React, { useState } from 'react'
import NewTodo from './NewTodo'
import TodoList from './TodoList'

function App() {
  const [todos, setTodos] = useState([])

  function newTodoHandler(newTodoData) {
    setTodos((prevTodos) => [...prevTodos, newTodoData])
  }

  return (
    <>
      <h1>Todo List</h1>
      <TodoList todos={todos} />
      <NewTodo onNewTodo={newTodoHandler} />
      <div>0 Todos left</div>
    </>
  )
}

export default App
