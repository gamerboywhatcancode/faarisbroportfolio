import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, HashRouter, Link, createBrowserRouter } from 'react-router-dom'
import Home from './pages/home.jsx'


const router = createBrowserRouter([
  {
    path: "/faarisbroportfolio/",
    element: <App/>,
    children: [
      {
        path: '/faarisbroportfolio/',
        element: <Home/>
      },
      {
        path: "/faarisbroportfolio/skills",
        element: <Skills/>
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
    
  
)
