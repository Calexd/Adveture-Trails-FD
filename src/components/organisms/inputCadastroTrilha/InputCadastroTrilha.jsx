import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import Styles from "./cadastroTrilha.module.css";
import Cbutton from "../../Atoms/button/Cbutton";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

// input select dificuld and estado

import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { TrilhasContext } from "../../../context/TrilhasContext";

function InputCadastroTrilha() {
  const [dificult, setDificult] = React.useState("Iniciante");
  const navigate = useNavigate();

  const dificultChange = (event) => {
    setDificult(event.target.value);
  };

  const [estado, setEstado] = React.useState("SC");

  const estadoChange = (event) => {
    setEstado(event.target.value);
  };

  const [tipo, setTipo] = React.useState("Caminhada");

  const tipoChange = (event) => {
    setTipo(event.target.value);
  };

  function onSubmit(formValue) {
    console.log(formValue);
    addTrail({
      ...formValue,
      duracao: Number(formValue.duracao),
      trajeto: Number(formValue.trajeto),
    });
    navigate("/explorar");
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { addTrail } = React.useContext(TrilhasContext);

  return (
    <div className={Styles.boxCadastro}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={Styles.mainInput}>
          <div className={Styles.centerInputUp}>
            <div className={Styles.centerTitle}>
              <h1>Cadastro de nova trilha</h1>
            </div>
            <InputLabel className={Styles.inputLabel} htmlFor="name">
              Nome da trilha
            </InputLabel>
            <TextField
              {...register("nomeTrilha", {
                required: "Este campo é obrigatorio",
                maxLength: {
                  value: 100,
                  message: "Este campo aceita no máximo 100 carateres",
                },
              })}
              helperText={errors.nomeTrilha?.message}
              id="name"
              variant="outlined"
              size="small"
              type="text"
              placeholder="Digite o nome da trilha"
              sx={{
                "& .MuiFormHelperText-root": {
                  color: "red",
                },
              }}
            ></TextField>
          </div>
          <div className={Styles.centerInput}>
            <div className={Styles.centerInputRight}>
              <InputLabel className={Styles.inputLabel} htmlFor="duration">
                Duração estimada (min)
              </InputLabel>
              <TextField
                {...register("duracao", {
                  required: "Este campo é obrigatorio",
                })}
                type="number"
                id="duration"
                variant="outlined"
                size="small"
                placeholder="digite a duração estimada em minutos"
                helperText={errors.duracao?.message}
                sx={{
                  "& .MuiFormHelperText-root": {
                    color: "red",
                  },
                }}
              ></TextField>
              <InputLabel className={Styles.inputLabel} htmlFor="city">
                Cidade
              </InputLabel>
              <TextField
                {...register("cidade", {
                  required: "Este campo é obrigatorio",
                  maxLength: {
                    value: 60,
                    message: "Este campo aceita no máximo 60 caratere",
                  },
                })}
                type="text"
                name="cidade"
                id="city"
                variant="outlined"
                size="small"
                placeholder="Digite o nome da cidade"
                helperText={errors.cidade?.message}
                sx={{
                  "& .MuiFormHelperText-root": {
                    color: "red",
                  },
                }}
              ></TextField>
              <InputLabel className={Styles.inputLabel} htmlFor="username">
                Nome completo usuario
              </InputLabel>
              <TextField
                {...register("nomeUsuario", {
                  required: "Este campo é obrigatorio",
                  maxLength: {
                    value: 60,
                    message: "Este campo aceita no máximo 60 carateres",
                  },
                })}
                type="text"
                id="username"
                variant="outlined"
                size="small"
                placeholder="Nome completo usuário"
                helperText={errors.username?.message}
                sx={{
                  "& .MuiFormHelperText-root": {
                    color: "red",
                  },
                }}
              ></TextField>
            </div>
            <div className={Styles.centerInputLeft}>
              <InputLabel className={Styles.inputLabel} htmlFor="suit">
                Trajeto (km)
              </InputLabel>
              <TextField
                {...register("trajeto", {
                  required: "Este campo é obrigatorio",
                })}
                type="number"
                id="suit"
                variant="outlined"
                size="small"
                placeholder="digite a distância em km"
                helperText={errors.trajeto?.message}
                sx={{
                  "& .MuiFormHelperText-root": {
                    color: "red",
                  },
                }}
              ></TextField>
              <div className={Styles.selectsInpuLeft}>
                <InputLabel className={Styles.inputLabel} htmlFor="state">
                  Estado
                </InputLabel>
                <FormControl sx={{ m: 1, minWidth: 250 }}>
                  <Select
                    {...register("estado", {
                      required: "Este campo é obrigatorio",
                    })}
                    name="estado"
                    id="state"
                    value={estado}
                    onChange={estadoChange}
                    size="small"
                    helperText={errors.estado?.message}
                  >
                    <MenuItem value="AC">AC</MenuItem>
                    <MenuItem value="AL">AL</MenuItem>
                    <MenuItem value="AP">AP</MenuItem>
                    <MenuItem value="AM">AM</MenuItem>
                    <MenuItem value="BA">BA</MenuItem>
                    <MenuItem value="CE">CE</MenuItem>
                    <MenuItem value="DF">DF</MenuItem>
                    <MenuItem value="ES">ES</MenuItem>
                    <MenuItem value="GO">GO</MenuItem>
                    <MenuItem value="MA">MA</MenuItem>
                    <MenuItem value="MT">MT</MenuItem>
                    <MenuItem value="MS">MS</MenuItem>
                    <MenuItem value="MG">MG</MenuItem>
                    <MenuItem value="PA">PA</MenuItem>
                    <MenuItem value="PB">PB</MenuItem>
                    <MenuItem value="PR">PR</MenuItem>
                    <MenuItem value="PE">PE</MenuItem>
                    <MenuItem value="PI">PI</MenuItem>
                    <MenuItem value="RJ">RJ</MenuItem>
                    <MenuItem value="RN">RN</MenuItem>
                    <MenuItem value="RS">RS</MenuItem>
                    <MenuItem value="RO">RO</MenuItem>
                    <MenuItem value="RR">RR</MenuItem>
                    <MenuItem value="SC">SC</MenuItem>
                    <MenuItem value="SP">SP</MenuItem>
                    <MenuItem value="SE">SE</MenuItem>
                    <MenuItem value="TO">TO</MenuItem>
                  </Select>
                </FormControl>
                <InputLabel className={Styles.inputLabel} htmlFor="dificult">
                  Dificuldade
                </InputLabel>
                <FormControl sx={{ m: 1, minWidth: 250 }}>
                  <Select
                    {...register("dificuldade", {
                      required: "Este campo é obrigatorio",
                    })}
                    id="dificult"
                    value={dificult}
                    onChange={dificultChange}
                    size="small"
                    helperText={errors.dificuldade?.message}
                  >
                    <MenuItem value="Iniciante">Iniciante</MenuItem>
                    <MenuItem value="Intermediario">Intermediario</MenuItem>
                    <MenuItem value="Avançado">Avançado</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
          </div>
          <div className={Styles.centerInputDown}>
            <InputLabel className={Styles.inputLabel} htmlFor="type">
              Tipo da trilha
            </InputLabel>
            <FormControl sx={{ m: 1, minWidth: 250 }}>
              <Select
                {...register("dificuldade", {
                  required: "Este campo é obrigatorio",
                })}
                name="tipo"
                id="type"
                value={tipo}
                onChange={tipoChange}
                size="small"
              >
                <MenuItem value="Caminhada">Caminhada/Trekking</MenuItem>
                <MenuItem value="Trekking">Ciclismo</MenuItem>
              </Select>
            </FormControl>
            <InputLabel className={Styles.inputLabel} htmlFor="urlimg">
              URL imagem da trilha
            </InputLabel>
            <TextField
              {...register("urlImage", {
                maxLength: {
                  value: 300,
                  message: "Este campo aceita no máximo 300 carateres",
                },
                validate: {
                  isImageURL: (value) => {
                    if (
                      value.startsWith("http://") ||
                      value.startsWith("https://")
                    ) {
                      return true; 
                    } else {
                      return "A URL informada não é válida"; 
                    }
                  },
                },
              })}
              error={errors.urlImage ? true : false}
              id="urlimg"
              variant="outlined"
              size="small"
              placeholder="Insira un link de uma imagen da trilha"
              helperText={errors.urlImage?.message}
              sx={{
                "& .MuiFormHelperText-root": {
                  color: "red",
                },
              }}
            />
          </div>
          <div className={Styles.boxbuttons}>
            <div className={Styles.buttonscenter}>
              <Cbutton type="submit">Cadastrar</Cbutton>
              <Link to="/">
                <Cbutton variant="outlined">Voltar</Cbutton>
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default InputCadastroTrilha;
