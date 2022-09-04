import React, { useState, useEffect } from "react";
import useProtectPage from "../../hooks/useProtectedPage";
import logo from "../../assets/images/logo2.png";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { goToEdit } from "../../routes/coordinator";
import { userData, userDelete } from "../../services/user";
import {
  ScreenContainer,
  HomeImage,
  ButtonContainer,
  Text1,
  Text2,
} from "./styled";

const HomePage = () => {
  useProtectPage();
  const id = localStorage.getItem("id");
  const navigate = useNavigate();
  let [data, setData] = useState("");

  useEffect(() => {
    if (!data) {
      userData(id, setData);
    }
  }, [data]);

  const onClickDelete = (id) => {
    userDelete(id, navigate);
  };

  return (
    <ScreenContainer>
      <HomeImage src={logo} />
      <Text1>{`Seja bem vindo(a), ${data.name_user}`}</Text1>
      <Text2>Estamos felizes em ter você aqui conosco!</Text2>
      <ButtonContainer>
        <Button
          sx={{ mt: 2 }}
          variant={"contained"}
          color={"primary"}
          onClick={() => goToEdit(navigate, data.id)}
        >
          Editar informações
        </Button>

        <Button
          sx={{ mt: 2 }}
          variant={"contained"}
          color={"primary"}
          onClick={() => onClickDelete(data.id)}
        >
          Deletar cadastro
        </Button>
      </ButtonContainer>
    </ScreenContainer>
  );
};

export default HomePage;
