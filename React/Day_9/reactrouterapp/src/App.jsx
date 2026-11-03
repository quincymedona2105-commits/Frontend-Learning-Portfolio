import React, { useState } from 'react'
import Task2 from './components/Task2'

const App = () => {

  const [showname, setShowName] = useState("")

  const [showdata, SetShowData] = useState([])

  const handleChange = (e) => {
    setShowName(e.target.value)
  }

  const handleClick = (e) => {
    e.preventDefault()

    if (!showname) {
      alert("Fill the form")
      return
    }

    let data = { id: Date.now(), name: showname }

    let copy = [...showdata]

    copy.push(data)

    SetShowData(copy)

    setShowName("")
  }

  return (
  
  <div>
    <div>
  
  <form onSubmit={handleClick}>
  <input type="text" placeholder="Enter a name" value={showname} onChange={handleChange}/>

  <button type="submit">Submit</button>

  </form>

  <h2>Student Names</h2>{showdata.map((e) => (
  <h3 key={e.id}>{e.name}</h3>
      
  ))}

  </div>
  
    <Task2/>
  
  </div>
  
  )
}

export default App