import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes,Route, HashRouter } from 'react-router-dom'
import Home from './assets/pages/home'
import Skills from './assets/pages/skills.js'
import Interest from './assets/pages/interest'
import Story from './assets/pages/story'
import Projects from './assets/pages/projects'
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
