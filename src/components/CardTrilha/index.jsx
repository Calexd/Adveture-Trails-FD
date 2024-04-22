import * as PropTypes from "prop-types";
import Styles from "./style.module.css";
import { CardContent } from "@mui/material";

import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";

function CardTrilha({ dadosTrilha }) {
  const [value, setValue] = React.useState(2);

  let customColor;
  let textColor;
  if (dadosTrilha.dificuldade === "Iniciante") {
    customColor = "#DAF7A6";
    textColor = "#000000 ";
  }
  if (dadosTrilha.dificuldade === "Intermediário") {
    customColor = "#FFC300";
    textColor = "#000000 ";
  }
  if (dadosTrilha.dificuldade === "Avançado") {
    customColor = "#FF5733";
    textColor = "#000000 ";
  }

  return (
    <CardContent>
      <div className={Styles.card_container}>
        <div className={Styles.container_img}>
          <img src={dadosTrilha.urlImage} alt="imagem Trilha"></img>
        </div>
        <div className={Styles.container_info}>
          <h2>
            {dadosTrilha.nomeTrilha} - {dadosTrilha.cidade}/{dadosTrilha.estado}
          </h2>
          <div className={Styles.infoTrilha_por}>
            <span><b>Por: {dadosTrilha.nomeUsuario}</b></span>
          </div>
          <div className={Styles.infoTrilha}>
            <span>Duração: {dadosTrilha.duracao}</span>
            <span>Trajeto: {dadosTrilha.trajeto}km</span>
            <Stack spacing={1} alignItems="left">
              <Stack direction="row" spacing={1}>
                <Chip
                  label={dadosTrilha.dificuldade}
                  style={{ backgroundColor: customColor, color: textColor }}
                />
              </Stack>
            </Stack>
            {/* <span>Dificuldade: {dadosTrilha.dificuldade}</span> */}
            {/* <span>Tipo: {dadosTrilha.tipo}</span> */}
          </div>
          <Box
            sx={{
              "& > legend": { mt: 2 },
            }}
          >
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
          </Box>
        </div>
      </div>
    </CardContent>
  );
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
    urlImage: PropTypes.string,
  }),
};

export default CardTrilha;
