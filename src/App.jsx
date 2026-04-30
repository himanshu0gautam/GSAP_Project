import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Agents from './pages/About'
import Project from './pages/Project'
import Navbar from './Component/Navbar/Navbar'
import FullNavbar from './Component/Navbar/FullNavbar'


const App = () => {

  return (
    <>
      <div className="text-white">
      <Navbar />
      <FullNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Agents />} />
          <Route path="/project" element={<Project />} />
        </Routes>

      </div>
    </>
  )
}

export default App