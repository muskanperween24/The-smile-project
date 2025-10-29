import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/about'
import Footer from './components/Footer'
import './App.css'

// TODO: Friends will add these components
// import Programs from './components/Programs'
// import Team from './components/Team'
// import Donate from './components/Donate'
// import Contact from './components/Contact'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* TODO: Friends will uncomment and add these routes when components are ready */}
          {/* <Route path="/programs" element={<Programs />} /> */}
          {/* <Route path="/team" element={<Team />} /> */}
          {/* <Route path="/donate" element={<Donate />} /> */}
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
