import CardTrilha from '../../components/CardTrilha/index.jsx';
import { TrilhasContext } from '../../context/TrilhasContext.jsx';
import Styles from'./explorar.module.css'
import { useContext } from 'react';

function explorar(){
  const {trilhas} = useContext(TrilhasContext)

    return(
        <div>
          <div className={Styles.main_img}>

          </div>
          <div className={Styles.container}>

          <div>
            <h1>Explore trilhas incríveis</h1>
          </div>
          <div className={Styles.container_trilhas}>
            
            {
            trilhas.map((trilhas,index) => (

              <CardTrilha dadosTrilha={trilhas} key={index} />
            ))
          }
          </div>
          </div>
          
        </div>
    );
}

export default explorar;