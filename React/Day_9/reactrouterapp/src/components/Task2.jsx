import React, { useState } from 'react'

const Task2 = () => {

  const [showName, setShowName] = useState("")
  const [showAge, setShowAge] = useState("")
  const [showNumber, setShowNumber] = useState("")
  const [showDatas, setShowDatas] = useState([])

  const handleChangeName = (e) => {
    setShowName(e.target.value)
  }

  const handleChangeage = (e) => {
    setShowAge(e.target.value)
  }

  const handleChangeNumber = (e) => {
    setShowNumber(e.target.value)
  }

  const handleClick = (e) => {

    e.preventDefault()

    if (!showName || !showAge || !showNumber) {
      alert("Fill the form")
      return
    }

    let datas = { id: Date.now(), name: showName, age: showAge, numbers: showNumber }

    let copy = [...showDatas]

    copy.push(datas)

    setShowDatas(copy)

    setShowName("")

    setShowAge("")

    setShowNumber("")

  }

  return (
    <>
      <form onSubmit={handleClick}>

        <input type="text" placeholder="Enter the Name" value={showName} onChange={handleChangeName} />

        <input type="number" placeholder="Enter the Age" value={showAge} onChange={handleChangeage} />

        <input type="text" placeholder="Enter the Mobile" value={showNumber} onChange={handleChangeNumber} />

        <button type="submit">Register</button>

      </form>

      <div>

        <table border="2" cellPadding="10">

          <thead>
            <tr>
              <th>S.NO</th>
              <th>Name</th>
              <th>Age</th>
              <th>Number</th>
            </tr>
          </thead>

          <tbody>

            {showDatas.map((e, i) => (
              <tr key={e.id}>
                <td>{i + 1}</td>
                <td>{e.name}</td>
                <td>{e.age}</td>
                <td>{e.numbers}</td>
              </tr>
            ))}

          </tbody>

        </table>

      </div>
    </>
  )
}

export default Task2