import * as PropTypes from "prop-types"
function CardTrilha({dadosTrilha}){
    return(
        <>
          <h2>{dadosTrilha.nomeTrilha} - {dadosTrilha.cidade}/{dadosTrilha.estado}</h2>
          <img width="200px" src={dadosTrilha.urlImage} alt="imagem Trilha"></img>
          <span>Por: {dadosTrilha.nomeUsuario}</span>
          <span>Duração: {dadosTrilha.duracao}</span>
          <span>Trajeto: {dadosTrilha.trajeto}km</span>
          <span>Dificuldade: {dadosTrilha.dificuldade}</span>
          <span>Tipo: {dadosTrilha.tipo}</span>
        
        </>
    )

}
    CardTrilha.propTypes = {
        dadosTrilha: PropTypes.exact({
            nomeTrilha: PropTypes.string,
            cidade: PropTypes.string,
            estado: PropTypes.string,
            duracao: PropTypes.number,
            trajeto: PropTypes.number,
            dificuldade: PropTypes.string,
            tipo: PropTypes.string,
            nomeUsuario: PropTypes.string,
            urlImage: PropTypes.string
        })
}

export default CardTrilha;