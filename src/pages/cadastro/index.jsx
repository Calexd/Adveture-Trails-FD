import React from "react";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import Styles from "./cadastro.module.css";

function Cadastro() {
  return (
    <div className={Styles.boxCadastro}>
      <div className={Styles.mainInput}>
        <div className={Styles.centerInputUp}>
          <h1>Cadastro de nova trilha</h1>
          <InputLabel className={Styles.inputLabel} htmlFor="Estado">
            Estado
          </InputLabel>
          <TextField
            variant="outlined"
            size="small"
            placeholder="Digite o nome da trilha"
          ></TextField>
        </div>
        <div className={Styles.centerInput}>
          <div className={Styles.centerInputRight}>
            <TextField
              label="Duração estimada (min)"
              variant="outlined"
              size="small"
            ></TextField>
            <TextField
              label="Cidade"
              variant="outlined"
              size="small"
            ></TextField>
            <TextField
              label="Nome completo usuário"
              variant="outlined"
              size="small"
            ></TextField>
          </div>
          <div className={Styles.centerInputLeft}>
            <TextField
              label="Trajeto (km)"
              variant="outlined"
              size="small"
            ></TextField>
            <TextField
              label="Estado"
              variant="outlined"
              size="small"
            ></TextField>
            <TextField
              label="Dificuldade"
              variant="outlined"
              size="small"
            ></TextField>
          </div>
        </div>
        <div className={Styles.centerInputDown}>
          <TextField
            label="Tipo de Trilha"
            variant="outlined"
            size="small"
          ></TextField>
          <TextField
            label="URL imagem da trilha"
            variant="outlined"
            size="small"
          ></TextField>
        </div>
      </div>
    </div>
  );
}

export default Cadastro;
