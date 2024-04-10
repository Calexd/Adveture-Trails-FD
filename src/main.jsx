import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Cadastro from '../src/pages/cadastro.jsx'
import Explorar from '../src/pages/explorar.jsx'


const routers = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/cadastro",
    element: <Cadastro/>
  },
  {
    path: "/explorar",
    element: <Explorar/>
  }
]) 

ReactDOM.createRoot(document.getElementById('root')).render(
 <RouterProvider router={routers}>

 </RouterProvider>
)
