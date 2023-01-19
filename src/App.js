import React, { useRef, useState } from 'react'
import TodoList from './TodoList'

function App() {
  const [todos, setTodos] = useState([])
  const todoDescRef = useRef()

  function addTodoHandler(event) {
    const description = todoDescRef.current.value
    if (description === '') return
    setTodos((prev) => [
      ...prev,
      { id: crypto.randomUUID(), desc: description, isComplete: false },
    ])
    todoDescRef.current.value = null
  }

  return (
    <>
      <TodoList todos={todos} />
      <input ref={todoDescRef} type="text" />
      <button onClick={addTodoHandler}>Add Todo</button>
      <button>Clear Completed</button>
      <div>0 Todos left</div>
    </>
  )
}

export default App
