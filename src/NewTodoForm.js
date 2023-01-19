import React, { useState } from 'react'

function NewTodoForm({ onSaveTodoData }) {
  const [descriptionValue, setDescriptionValue] = useState('')

  function descriptionChangeHandler(event) {
    setDescriptionValue(event.target.value)
  }

  function addTodoHandler(event) {
    event.preventDefault()
    const description = descriptionValue

    if (description === '') return

    onSaveTodoData({ desc: description, id: crypto.randomUUID() })
    setDescriptionValue('')
  }

  return (
    <form onSubmit={addTodoHandler}>
      <input
        value={descriptionValue}
        onChange={descriptionChangeHandler}
        type="text"
      />
      <button type="submit">Add Todo</button>
      <button>Clear Completed</button>
    </form>
  )
}

export default NewTodoForm
