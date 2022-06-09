import React from 'react'

const NewTask = ({newTask, handleChange, handleSubmit}) => {

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="add a new task"
        name="title"
        value = {newTask.title || ""}
        onChange={handleChange}
      />
      <button type="submit">add task</button>
    </form>
  )

}

export default NewTask
