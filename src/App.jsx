import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes,Route, HashRouter } from 'react-router-dom'
import Home from './pages/home'
import Skills from './pages/skills.jsx'
import Interest from './pages/interest'
import Story from './pages/story'
import Projects from './pages/projects'
function App() {



  return (
    <>
        <HashRouter basename='/home'>
          <Routes>
        <Route path='/home'element={<Home/>}/>
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/interests' element={<Interest/>}/>
        <Route path='/story' element={<Story/>}/>
        <Route path='/projects' element={<Projects/>}/>
      </Routes>
    <App />
  </HashRouter>
      
      
      
      
    </>
  )
}

export default App
