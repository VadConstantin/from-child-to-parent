import React, { useState } from 'react'

const Incrementeur = () => {

  const [ profile, setProfile ] = useState({count: 0})
  const [ count, setCount ] = useState(0)

  const handleClick = (e) => {
    e.preventDefault()
    setProfile({count: profile.count +1})
  }

  const handleClick2 = (e) => {
    e.preventDefault()
    setCount(count => count + 1)
  }

  return (
    <>
      <div>Hello</div>
      <button onClick={handleClick}>{JSON.stringify(profile)}</button>
      <button onClick={handleClick2}>{JSON.stringify(count)}</button>
    </>
  )

}

export default Incrementeur;
