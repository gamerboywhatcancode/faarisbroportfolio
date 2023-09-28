import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, HashRouter, Link } from 'react-router-dom'
import Home from './assets/pages/home.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename='/home'>
      <Routes>
        <Route path='/home'element={<Home/>}/>
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/interests' element={<Interest/>}/>
        <Route path='/story' element={<Story/>}/>
        <Route path='/projects' element={<Projects/>}/>
      </Routes>
    <App />
  </BrowserRouter>
    
  
)
