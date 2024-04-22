import { createContext, useState } from "react";


export const TrilhasContext = createContext()

export const TrilhasContextProvider = ({children}) => {
    const [trilhas, setTrilhas] = useState ([{
      "nomeTrilha": "Trilha Lagoinha do Leste",
      "cidade": "Florianópolis",
      "estado": "SC",
      "duracao": 180,
      "trajeto": 14,
      "dificuldade": "Intermediário",
      "tipo": "caminhada / tracking",
      "nomeUsuario": "Caled Rivas",
      "urlImage": "https://images.pexels.com/photos/917510/pexels-photo-917510.jpeg"
    },
    {
      "nomeTrilha": "Trilha da Costa da Lagoa",
      "cidade": "Florianópolis",
      "estado": "SC",
      "duracao": 300,
      "trajeto": 7.5,
      "dificuldade": "Intermediário",
      "tipo": "caminhada / tracking",
      "nomeUsuario": "Caled Rivas",
      "urlImage": "https://images.pexels.com/photos/917510/pexels-photo-917510.jpeg"
    },
    {
      "nomeTrilha": "Trilha da Praia dos Naufragados",
      "cidade": "Florianópolis",
      "estado": "SC",
      "duracao": 40,
      "trajeto": 2.6,
      "dificuldade": "Iniciante",
      "tipo": "caminhada / tracking",
      "nomeUsuario": "Caled Rivas",
      "urlImage": "https://images.pexels.com/photos/917510/pexels-photo-917510.jpeg"
    },
    {
      "nomeTrilha": "Trilha da Praia do Gravatá",
      "cidade": "Florianópolis",
      "estado": "SC",
      "duracao": 60,
      "trajeto": 3.1,
      "dificuldade": "Iniciante",
      "tipo": "caminhada / tracking",
      "nomeUsuario": "Caled Rivas",
      "urlImage": "https://images.pexels.com/photos/917510/pexels-photo-917510.jpeg"
    },
    {
      "nomeTrilha": "Trilha Ecológica do Rio Vermelho",
      "cidade": "Florianópolis",
      "estado": "SC",
      "duracao": 30,
      "trajeto": 1,
      "dificuldade": "Iniciante",
      "tipo": "caminhada",
      "nomeUsuario": "Caled Rivas",
      "urlImage": "https://images.pexels.com/photos/917510/pexels-photo-917510.jpeg"
    },
    {
      "nomeTrilha": "Trilha Cume do Morro das Aranhas",
      "cidade": "Florianópolis",
      "estado": "SC",
      "duracao": 90,
      "trajeto": 3.1,
      "dificuldade": "Intermediário",
      "tipo": "caminhada / tracking",
      "nomeUsuario": "Caled Rivas",
      "urlImage": "https://images.pexels.com/photos/917510/pexels-photo-917510.jpeg"
    },
    {
      "nomeTrilha": "Trilha do Morro da Pedra Branca",
      "cidade": "São José",
      "estado": "SC",
      "duracao": 147,
      "trajeto": 5.8,
      "dificuldade": "Avançado",
      "tipo": "caminhada / tracking",
      "nomeUsuario": "Caled Rivas",
      "urlImage": "https://images.pexels.com/photos/917510/pexels-photo-917510.jpeg"
    },
    {
      "nomeTrilha": "Trilha do Morro do Cambirela",
      "cidade": "Palhoça",
      "estado": "SC",
      "duracao": 360,
      "trajeto": 8.77,
      "dificuldade": "Avançado",
      "tipo": "caminhada / tracking",
      "nomeUsuario": "Caled Rivas",
      "urlImage": "https://images.pexels.com/photos/917510/pexels-photo-917510.jpeg"
    }])

    function addTrail(trailData) {
      setTrilhas((t => [...t, trailData]))
    }

    return (
        <TrilhasContext.Provider value={{trilhas, setTrilhas, addTrail}}>
            {children}
        </TrilhasContext.Provider>
    )
}

