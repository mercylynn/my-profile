import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Navbar from './components/Navbar';
import NotFoundPage from './components/NotFoundPage';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/projects' element={<Portfolio />} />
        <Route path='/contact' element={<Contact />} />
        <Route path="*" element={<NotFoundPage />} />

      </Routes>

    </div>
  )
}

export default App