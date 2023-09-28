import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, HashRouter, Link } from 'react-router-dom'
import Home from './pages/home.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename='/home'>
    <Link to='/home'/>
    <App />
  </BrowserRouter>
    
  
)
