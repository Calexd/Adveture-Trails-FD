import React from 'react';
import "./style.css"


function header(){
    return(
        <div className="headercontainer">
          <h3 className='title'>Adventure Trails FD</h3>
          <ul className='explorer'>
            <li>Explorar Trilhas</li>
            <li>Cadastrar Trilhas</li>
          </ul>
        </div>
    )
}

export default header;