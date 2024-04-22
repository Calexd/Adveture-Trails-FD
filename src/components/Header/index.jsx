import React from 'react';
import Styles from './header.module.css'
import { Link } from 'react-router-dom';
import Switch from '@mui/material/Switch';
import { ThemeContext } from '../../context/ThemeContext';
import { useContext } from 'react';
import { AppBar, Toolbar } from "@mui/material";





function header(){
  const { loading } = useContext(ThemeContext);
const { toggleTheme } = useContext(ThemeContext);

    return(
        <AppBar component="nav" color="primary" className={Styles.headercontainer} >
          <Link to ='/' className={Styles.title}>Adventure Trails FD</Link>
          <Toolbar className={Styles.explorer}  style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Link to='/explorar' className={Styles.title}>Explorar Trilhas</Link>
            <Link to='/cadastro' className={Styles.title}>Cadastrar Trilhas</Link>
            <Switch
            checked={loading}
            onChange={() => toggleTheme()}
            name="loading"
            color="primary"
          />          
          <span>Dark Mode</span>
          </Toolbar>
        </AppBar>
    )
}

export default header;