import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, HashRouter, Link, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/home.jsx'
import Skill from './pages/skills.jsx'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <App/>
  </React.StrictMode>
    
  
)
