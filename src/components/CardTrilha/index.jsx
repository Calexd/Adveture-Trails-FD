import * as PropTypes from "prop-types"
import Styles from "./style.module.css"
import {CardContent,} from "@mui/material"
function CardTrilha({dadosTrilha}){
    return(
        <CardContent>
        <div className={Styles.card_container}>
            <div className={Styles.container_img}>
                <img src={dadosTrilha.urlImage} alt="imagem Trilha"></img>
            </div>
            <div className={Styles.container_info}>
                <h2>{dadosTrilha.nomeTrilha} - {dadosTrilha.cidade}/{dadosTrilha.estado}</h2>
                <span>Por: {dadosTrilha.nomeUsuario}</span>
                <span>Duração: {dadosTrilha.duracao}</span>
                <span>Trajeto: {dadosTrilha.trajeto}km</span>
                <span>Dificuldade: {dadosTrilha.dificuldade}</span>
                <span>Tipo: {dadosTrilha.tipo}</span>
            </div>
        </div>
        </CardContent>
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