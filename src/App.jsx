import React from 'react';
import CardTrilha from './components/CardTrilha/index.jsx'
import Header from './components/Header/header.jsx'
import "../src/App.css"
import useFetch from './Hooks/useFetch.js'
import trilhasData from '../public/trilhas.json'

function App() {
  const [data, loading] = useFetch(trilhasData);

  return (
    <div className="container">
      <Header />
      <div className='main-img'>

      </div>
      <div className='container-trilhas'> 
    {
      trilhasData.map((trilha,index) => (

        <CardTrilha dadosTrilha={trilha} key={index} />
      ))
    }
      </div>
    </div>
  )
}

export default App
