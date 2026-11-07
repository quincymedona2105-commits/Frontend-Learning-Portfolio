
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

const navigate = useNavigate()

const [useremail, setUserEmail] = useState("")
const [userpassword, setUserPassword] = useState("")

const [error, setError] = useState("")

const [userdata, setUserData] = useState([])

const handleEmail = (e) => {
  setUserEmail(e.target.value)
}

const handlePassword = (e) => {
  setUserPassword(e.target.value)
}

const handleClick = (e) => {
    e.preventDefault()

    if(!useremail || !userpassword){
      setError("Please fill all the fields")
      return
    }

    let data = JSON.parse(localStorage.getItem("userData")) || []

    const checkEmail = data.find((user) => user.email === useremail && user.password === userpassword)

    if(!checkEmail){
      setError("Invalid email or password")
      return
    }

    localStorage.setItem("isActive", JSON.stringify(checkEmail))

    setError("Login successful! Please wait for 2 seconds")

    setUserEmail("")
    setUserPassword("")

    setTimeout(() => {
      navigate("/")
    }, 2000)
}

return (
<>
  <div className='bg-gray-100 flex justify-center items-center p-70 h-100'>

  <form onSubmit={handleClick} className='bg-white p-10 rounded-lg shadow-lg flex flex-col gap-5 mx-auto'>

    <div>
      <h1 className='text-2xl font-bold mb-4 text-center'>Login</h1>
      <p className='p-3 text-center'>Login to your account!!!!</p>
    </div>

    <div>
      <input type="text" className='border border-green-500 rounded w-100 p-1' value={useremail} onChange={handleEmail} placeholder='Enter your email' />
    </div>

    <div>
      <input type="password" className='border border-green-500 rounded w-100 p-1' value={userpassword} onChange={handlePassword} placeholder='Enter your password' />
    </div>

    <div>
      <p className='text-red-500 text-center'>{error}</p>
    </div>

    <div>
        <button type='submit' className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600'>
          Login
        </button>
    </div>

  </form>

  </div>
</>
)
}

export default Login
