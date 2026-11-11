import bg from './assets/bg.jpg'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import About from './pages/About'
import { Routes, Route } from 'react-router-dom'

const App = () => {

  const bgImage = {
    backgroundImage: `url(${bg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh'
  }

  return (
    <div style={bgImage}>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>

    </div>
  )
}

export default App