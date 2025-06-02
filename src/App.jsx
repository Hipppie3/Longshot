import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Work from './pages/Work'
import Contact from './pages/Contact'
import ImageDetail from './pages/ImageDetail'
import Footer from './pages/Footer'

function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <div className="main-content">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/work' element={<Work />} />
        <Route path='/contact' element={<Contact />} />
        <Route path="/image/:id" element={<ImageDetail />} /> {/* Dynamic Route */}
      </Routes>

    </div>
          <Footer />
          </div>
  )
}

export default App
