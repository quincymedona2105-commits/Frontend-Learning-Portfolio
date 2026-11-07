
import React, { useState, useEffect } from 'react'

const Dashboard = () => {

  const [showdata, setShowData] = useState({})

  useEffect(() => {

    const data = JSON.parse(localStorage.getItem("isActive")) || {}

    setShowData(data)

  }, [])

  return (
    <>
      <h1>Welcome {showdata.name}</h1>
      <p>{showdata.email}</p>
    </>
  )
}

export default Dashboard
