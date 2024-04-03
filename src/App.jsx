import './App.css'
import CardTrilha from './components/CardTrilha/index.jsx'

function App() {

  const listaTrilhas = [
    {
      nomeTrilha: "Trilha Lagoinha do Leste",
      cidade: "Florianópolis",
      estado: "SC",
      duracao: 180,
      trajeto: 14 ,
      dificuldade: "Moderada",
      tipo: "caminhada / tracking",
      nomeUsuario: "Caled Rivas",
      urlImage: "https://images.pexels.com/photos/917510/pexels-photo-917510.jpeg",

    }
  ]

  return (
    <>
    {

      listaTrilhas.map((trilha,index) => (

        <CardTrilha dadosTrilha={trilha} key={index} />
      ))
    }

    </>
  )
}

export default App
