import Header from "./components/Header/index.jsx"
import Footer from "../src/components/footer/index.jsx"
import {Outlet} from 'react-router-dom'
import { TrilhasContextProvider } from "./context/TrilhasContext"
import "../src/App.css"
import { ThemeContextProvider } from "./context/ThemeContext";




function App() {


  return (
    <ThemeContextProvider>
    <TrilhasContextProvider>
      <Header />
      <Outlet />
      <Footer />
    </TrilhasContextProvider>
    </ThemeContextProvider>
  )
}

export default App
