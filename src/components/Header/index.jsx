import React from 'react';
import Styles from './header.module.css'
import { Link } from 'react-router-dom';


function header(){
    return(
        <nav className={Styles.headercontainer}>
          <Link to ='/home' className={Styles.title}>Adventure Trails FD</Link>
          <ul className={Styles.explorer}>
            <Link to='/explorar' className={Styles.title}>Explorar Trilhas</Link>
            <Link to='/cadastro' className={Styles.title}>Cadastrar Trilhas</Link>
          </ul>
        </nav>
    )
}

export default header;