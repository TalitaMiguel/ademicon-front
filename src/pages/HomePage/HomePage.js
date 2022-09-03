import React, { useState, useEffect } from "react";
import useProtectPage from "../../hooks/useProtectedPage";
import { ScreenContainer, HomeImage } from "./styled";
import { Button } from "@mui/material";
import logo from "../../assets/images/logo2.png";
import { userData } from "../../services/user";

const HomePage = () => {
  useProtectPage();
  const id = localStorage.getItem("id");
  let [data, setData] = useState("");

  useEffect(() => {
    if (!data) {
      userData(id, setData);
    }
  }, [data]);

  console.log(data);
  return (
    <ScreenContainer>
      <HomeImage src={logo} />
      <h1>{`Seja bem vindo(a), ${data.name_user}`}</h1>
      <h2>Estamos felizes em ter você aquiconosco!</h2>
      <Button
        sx={{ mt: 2 }}
        variant={"contained"}
        color={"primary"}
      >
        Editar suas informações
      </Button>

      <Button
        sx={{ mt: 2 }}
        variant={"contained"}
        color={"primary"}
      >
        Deletar cadastro
      </Button>
    </ScreenContainer>
  );
};

export default HomePage;
