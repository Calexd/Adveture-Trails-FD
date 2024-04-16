import Header from "./components/Header/index.jsx"
import Footer from "../src/components/footer/index.jsx"
import {Outlet} from 'react-router-dom'
import { TrilhasContextProvider } from "./context/TrilhasContext"
import "../src/App.css"


function App() {

  return (
    <TrilhasContextProvider>
      <Header />
      <Outlet />
      <Footer />
    </TrilhasContextProvider>
  )
}

export default App
