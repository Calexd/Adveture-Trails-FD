import {createBrowserRouter} from 'react-router-dom'
import App from '../App.jsx'
import Cadastro from '../pages/cadastro/index.jsx'
import Explorar from '../pages/Explorar/explorar.jsx'
import Home from '../pages/home/home.jsx'


const routers = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: "/cadastro",
          element: <Cadastro/>
        },
        {
          path: "/explorar",
          element: <Explorar/>
        }
      ]
    }
  ])

  export default routers;
