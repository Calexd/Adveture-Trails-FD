import * as PropTypes from "prop-types"
import "./style.css"
function CardTrilha({dadosTrilha}){
    return(
        <div className="card_container">
            <div className="container-img">
                <img src={dadosTrilha.urlImage} alt="imagem Trilha"></img>
            </div>
            <div className="container-info">
                <h2>{dadosTrilha.nomeTrilha} - {dadosTrilha.cidade}/{dadosTrilha.estado}</h2>
                <span>Por: {dadosTrilha.nomeUsuario}</span>
                <span>Duração: {dadosTrilha.duracao}</span>
                <span>Trajeto: {dadosTrilha.trajeto}km</span>
                <span>Dificuldade: {dadosTrilha.dificuldade}</span>
                <span>Tipo: {dadosTrilha.tipo}</span>
            </div>
        </div>
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