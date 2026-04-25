import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Agents from './pages/Agents'
import Project from './pages/Project'

const App = () => {
  return (
    <>
    <div className="text-white">
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