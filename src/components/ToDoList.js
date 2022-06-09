import React, { useState, useEffect } from 'react'
import NewTask from './NewTask'
import AllTasks from './AllTasks'

const ToDoList = () => {

  const [ newTask, setNewTask ] = useState({})

  const handleChange = ({target}) => {
    const { name, value } = target
    setNewTask({id: Date.now(), [name]: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setAllTasks((prev) => { return [newTask, ...prev]});
    setNewTask({})
  }

  const [allTasks, setAllTasks] = useState([])

  const handleDelete = (taskToRemove) => {
    setAllTasks((prev) => {
      return prev.filter((task) => task.id !== taskToRemove)
    })
  }

  return (
    <div>
      <NewTask
        newTask={newTask}
        handleChange={handleChange}
        handleSubmit={handleSubmit} />
      <AllTasks
        allTasks={allTasks}
        handleDelete={handleDelete} />
    </div>
  )
}

export default ToDoList
