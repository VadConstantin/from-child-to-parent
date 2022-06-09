import React from 'react'

const AllTasks = ({allTasks, handleDelete}) => {
  return (
    <div>
      <p>All tasks:</p>
      <ul>
        {allTasks.map(({ title, id }) => {
          return (
          <li key={id}>
            <h2>{title}</h2>
            <button onClick={() => handleDelete(id)}> X </button>
          </li>
          )
        })}
      </ul>
    </div>
  )

}

export default AllTasks
