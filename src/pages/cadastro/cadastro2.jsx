import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
import Styles from "./cadastro.module.css";

function Cadastro() {
  return (
    <Box
      className={Styles.mainCadastro}
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "100ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <h1>Cadastro de nova trilha</h1>
      <div className={Styles.inputCadastro}>
        <InputLabel className={Styles.inputLabel} htmlFor="nome da Trilha">
          Nome da Trilha
        </InputLabel>
        <TextField
          required
          id="nome"
          label="Nome"
          placeholder="Digite o nome da Trilha"
        />
        <div className={Styles.littleInput}>
            <div className={Styles.littleInputLeft}>
            <InputLabel className={Styles.inputLabel} htmlFor="Duração">
            Duração estimada (min)
          </InputLabel>
          <TextField
            required
            id="duração"
            label="Duração estimada da trilha"
            placeholder="Digite a duração em minutos"
          />
          <InputLabel className={Styles.inputLabel} htmlFor="Cidade">
            Cidade
          </InputLabel>
          <TextField
            required
            id="cidade"
            label="Cidade"
            placeholder="Digite o nome da cidade"
          />
          <InputLabel className={Styles.inputLabel} htmlFor="Nome">
            Nome Completo do Usuário
          </InputLabel>
          <TextField
            required
            id="nomeCompleto"
            label="Nome Completo do Usuário"
            placeholder="Seu nome completo"
          />
            </div>
            <div className={Styles.littleInputLeft}>
          <InputLabel className={Styles.inputLabel} htmlFor="distancia">
            Trajeto (km)
          </InputLabel>
          <TextField
            required
            id="distancia"
            label="Distância"
            placeholder="Digite a distância em km"
          />
          <InputLabel className={Styles.inputLabel} htmlFor="Estado">
            Estado
          </InputLabel>
          <TextField
            required
            id="estado"
            label="Estado"
            placeholder="Digite o nome do Estado"
          />
          <InputLabel className={Styles.inputLabel} htmlFor="dificuldade">
            Dificuldade
          </InputLabel>
          <TextField
            required
            id="dificuldade"
            select
            label="Dificuldade"
            SelectProps={{
              native: true,
            }}
            helperText="Selecione a dificuldade"
          >
            <option value="facil">Fácil</option>
            <option value="media">Média</option>
            <option value="dificil">Difícil</option>
          </TextField>
            </div>
        </div>
        <InputLabel className={Styles.inputLabel} htmlFor="tipo">
          Tipo de Trilha
        </InputLabel>
        <TextField
          required
          id="tipo"
          select
          label="tipo"
          SelectProps={{
            native: true,
          }}
          helperText="Selecione o tipo de trilha"
        >
          <option value="Caminhada_tracking">Caminhada / trekking</option>
        </TextField>

        <TextField
          required
          id="urlImagem"
          label="URL da Imagem da Trilha"
          placeholder="URL da imagem da trilha"
        />
      </div>
      <div>
        <Button variant="contained" type="submit">
          Cadastrar
        </Button>
        <Button variant="contained" onClick={() => window.history.back()}>
          Voltar
        </Button>
      </div>
    </Box>
  );
}

export default Cadastro;