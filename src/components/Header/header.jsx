import React from 'react';
import "./style.css"
import { Link } from 'react-router-dom';


function header(){
    return(
        <nav className="headercontainer">
          <Link to ='/' className='title'>Adventure Trails FD</Link>
          <ul className='explorer'>
            <Link to='/explorar'>Explorar Trilhas</Link>
            <Link to='/cadastro'>Cadastrar Trilhas</Link>
          </ul>
        </nav>
    )
}

export default header;