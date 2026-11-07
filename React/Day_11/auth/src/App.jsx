
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar.jsx'
import Register from './pages/Register.jsx'
import Login from './pages/Login.jsx'
import Dashboard from './pages/Dashboard.jsx'

const App = () => {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </>
  )
}

export default App
