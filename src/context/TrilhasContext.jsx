import { createContext, useState } from "react";


export const TrilhasContext = createContext()

export const TrilhasContextProvider = ({children}) => {
    const [trilhas, setTrilhas] = useState ([
        {
            "nomeTrilha": "Trilha Lagoinha do Leste",
            "cidade": "Florianópolis",
            "estado": "SC",
            "duracao": 180,
            "trajeto": 14,
            "dificuldade": "Moderada",
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
            "dificuldade": "Moderada",
            "tipo": "caminhada / tracking",
            "nomeUsuario": "Caled Rivas",
            "urlImage": "https://images.pexels.com/photos/18078207/pexels-photo-18078207/free-photo-of-forest-trail.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          },
          {
            "nomeTrilha": "Trilha da Praia dos Naufragados",
            "cidade": "Florianópolis",
            "estado": "SC",
            "duracao": 40,
            "trajeto": 2.6,
            "dificuldade": "Muito Baixa",
            "tipo": "caminhada / tracking",
            "nomeUsuario": "Caled Rivas",
            "urlImage": "https://images.pexels.com/photos/2323650/pexels-photo-2323650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          },
          {
            "nomeTrilha": "Trilha da Praia do Gravatá",
            "cidade": "Florianópolis",
            "estado": "SC",
            "duracao": 60,
            "trajeto": 3.1,
            "dificuldade": "Baixa",
            "tipo": "caminhada / tracking",
            "nomeUsuario": "Caled Rivas",
            "urlImage": "https://images.pexels.com/photos/17157841/pexels-photo-17157841/free-photo-of-panorama-vista-paisagem-montanhas.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          },
          {
            "nomeTrilha": "Trilha Ecológica do Rio Vermelho",
            "cidade": "Florianópolis",
            "estado": "SC",
            "duracao": 30,
            "trajeto": 1,
            "dificuldade": "Muito Baixa",
            "tipo": "caminhada",
            "nomeUsuario": "Caled Rivas",
            "urlImage": "https://images.pexels.com/photos/2108809/pexels-photo-2108809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1g"
          },
          {
            "nomeTrilha": "Trilha Cume do Morro das Aranhas",
            "cidade": "Florianópolis",
            "estado": "SC",
            "duracao": 90,
            "trajeto": 3.1,
            "dificuldade": "Moderada",
            "tipo": "caminhada / tracking",
            "nomeUsuario": "Caled Rivas",
            "urlImage": "https://images.pexels.com/photos/1270718/pexels-photo-1270718.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          },
          {
            "nomeTrilha": "Trilha do Morro da Pedra Branca",
            "cidade": "São José",
            "estado": "SC",
            "duracao": 147,
            "trajeto": 5.8,
            "dificuldade": "Semi-Pesada",
            "tipo": "caminhada / tracking",
            "nomeUsuario": "Caled Rivas",
            "urlImage": "https://images.pexels.com/photos/4510992/pexels-photo-4510992.jpeg?auto=compress&cs=tinysrgb&w=400"
          },
          {
            "nomeTrilha": "Trilha do Morro do Cambirela",
            "cidade": "Palhoça",
            "estado": "SC",
            "duracao": 360,
            "trajeto": 8.77,
            "dificuldade": "Dificil",
            "tipo": "caminhada / tracking",
            "nomeUsuario": "Caled Rivas",
            "urlImage": "https://images.pexels.com/photos/691034/pexels-photo-691034.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
    ])

    return (
        <TrilhasContext.Provider value={{trilhas, setTrilhas}}>
            {children}
        </TrilhasContext.Provider>
    )
}

