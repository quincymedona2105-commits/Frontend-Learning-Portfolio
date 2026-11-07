
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
<div className='flex justify-between items-center p-4 bg-gray-800 text-white'>
      
<div>logo</div>

<div className='flex gap-10'>
    <Link to="/register">Register</Link>
    <Link to="/login">Login</Link>
    <Link to="/">Home</Link>
</div>
    </div>
  )
}

export default Navbar