import Styles from "./home.module.css";
import { Link } from "react-router-dom";
import backmainImage from "../../assets/backmain.jpg";
import cadastImage from "../../assets/cadastImage.jfif";
import Cbutton from "../../components/Atoms/button/Cbutton";

function home() {
  return (
    <>
      <div className={Styles.main_img}>
        <img
          className={Styles.backmainImage}
          src={backmainImage}
          alt="Backmain"
        ></img>
        <div className={Styles.containerText}>
          <h1>Que tal aproveitar um tempo com a natureza?</h1>
          <span>
            Junte-se à comunidade de entusiastas ao ar livre, compartilhe suas
            aventuras e inspire-se com as experiências de outros aventureiros.
            Prepare-se para explorar novos horizontes e se conectar com a
            natureza através do Adventure Trails!
          </span>
          <Link to="/explorar">
            <Cbutton>Explorar Trilhas</Cbutton>
          </Link>
        </div>
      </div>
      <div className={Styles.info_main}>
        <div className={Styles.info_explorar}>
          <div className={Styles.info_explorarTexts}>
            <h1>Explore trilhas incríveis</h1>
            <h3>
              O "Adventure Trails FD" é seu portal para explorar e compartilhar
              as melhores trilhas para trekking e ciclismo ao redor do mundo.
              Descubra rotas deslumbrantes, desde caminhos tranquilos por
              florestas exuberantes até trilhas desafiadoras em montanhas
              majestosas. Encontre informações detalhadas sobre cada trilha,
              incluindo distância, dificuldade, pontos de interesse naturais e
              dicas úteis para uma experiência eco-friendly.
            </h3>
          </div>
          <Link to="/explorar">
          <Cbutton>Explorar Trilhas</Cbutton>
          </Link>
        </div>
        <div className={Styles.info_cadastrar}>
          <div className={Styles.info_cadastTexts}>
            <h1>
              Compartilhe fotos, dicas e localização<br></br> das suas trilhas favoritas
            </h1>
            <Link to="/cadastro">
            <Cbutton>Cadastrar Trilhas</Cbutton>
          </Link>
          </div>
            <img src={cadastImage} alt="cadast_image"></img>
        </div>
      </div>
    </>
  );
}

export default home;
