import { Link } from 'react-router-dom'
import logo from '../assets/logo.jpg'

const NavBar = () => {

  const myLogo = logo

  return (
    <>
      <div className="flex items-center justify-between p-4 bg-green-200 font-bold">

        <img src={myLogo} alt="Logo" className="w-20 h-15 rounded-full" />

       
        <h1 className="text-4xl font-extrabold hover:text-red-600">My Diwali Celebration!!!!!</h1>

        <div className="flex gap-10">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </div>

      </div>
    </>
  )
}

export default NavBar