import React, { useState } from 'react'
import TodoList from './TodoList'

function App() {
  const [todos, setTodos] = useState([])
  const [descriptionValue, setDescriptionValue] = useState('')

  function descriptionChangeHandler(event) {
    setDescriptionValue(event.target.value)
  }

  function addTodoHandler(event) {
    const description = descriptionValue
    if (description === '') return

    setTodos((prev) => [
      ...prev,
      { id: crypto.randomUUID(), desc: description, isComplete: false },
    ])

    setDescriptionValue('')
  }

  return (
    <>
      <TodoList todos={todos} />
      <input
        value={descriptionValue}
        onChange={descriptionChangeHandler}
        type="text"
      />
      <button onClick={addTodoHandler}>Add Todo</button>
      <button>Clear Completed</button>
      <div>0 Todos left</div>
    </>
  )
}

export default App
