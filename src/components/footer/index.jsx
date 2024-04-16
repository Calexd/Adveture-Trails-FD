import React from 'react'
import Styles from "./footer.module.css"


function footer(){
    return(
        <nav className={Styles.headercontainer}>
          <h3>Caled Rivas</h3>
          <ul className={Styles.explorer}>
            <li>Github</li>
            <li>Linkedin</li>
          </ul>
        </nav>
    )
}

export default footer;