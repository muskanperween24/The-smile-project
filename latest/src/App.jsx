import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/about'
import Program from './components/Program'
import Contact from './components/Contact'
import Team from './components/Team'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Program />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/team" element={<Team />} />
          {/* TODO: Add donate route when component is ready */}
          {/* <Route path="/donate" element={<Donate />} /> */}
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
