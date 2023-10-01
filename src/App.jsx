import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes,Route, HashRouter as Router } from 'react-router-dom'
import Home from './pages/home'
import Skill from './pages/skills'
import Project from './pages/projects'
import Story from './pages/story'
import Interest from './pages/interest'
function App() {



  return (
    <>
    <Router>
    <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/skills' element={<Skill/>}/>
        <Route exact path='/interests' element={<Interest/>}/>
        <Route exact path='/story' element={<Story/>}/>
        <Route exact path='/projects' element={<Project/>}/>
      </Routes>
    </Router>

    
  
      
      
      
      
    </>
  )
}

export default App
