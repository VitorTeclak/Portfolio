import { useState, useEffect } from 'react'

import { Routes, Route } from 'react-router-dom'

//components
import Intro from './components/intro/Intro'
import Navbar from './components/navbar/Navbar'

//pages
import Home from './pages/home/Home'
import Sobre from './pages/sobre/Sobre'
import Portfolio from './pages/portfolio/Portfolio'

import './App.css'

function App() {
  const [loading, setLoading] = useState(true)
  const [transitioning, setTransitioning] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setTransitioning(true)

      setTimeout(() => {
        setLoading(false)
      }, 1000)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="app">
      {loading && (
        <div className={`intro-screen ${transitioning ? 'intro-saindo' : ''}`}>
          <Intro />
        </div>
      )}

      {!loading && (
        <div className="home-screen">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/sobre" element={<Sobre/>} />
            <Route path="/portfolio" element={<Portfolio/>} />
          </Routes>
        </div>
      )}
    </div>
  )
}

export default App




