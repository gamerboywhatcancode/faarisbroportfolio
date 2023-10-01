import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, HashRouter, Link, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/home.jsx'
import Skill from './pages/skills.jsx'


const router = createBrowserRouter([
  {
    path: "/faarisbroportfolio/",
    element: <App/>,
    children: [
      {
        path: "/faarisbroportfolio/",
        element: <Home/>,
      },
      {
        path: "/faarisbroportfolio/skills",
        element: <Skill/>

      }
      
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>
    
  
)
