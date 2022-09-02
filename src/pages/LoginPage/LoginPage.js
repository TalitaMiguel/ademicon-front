import React from "react";
import casa from "../../assets/images/carro-casa.png";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { goToSignUp } from "../../routes/coordinator";
import { ScreenContainer, SignUpButtonContainer, LogoImage } from "./styled";
import LoginForm from "./LoginForm";

const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <ScreenContainer>
      <LogoImage src={casa} />
      <LoginForm />
      <SignUpButtonContainer>
        <Button
          onClick={() => goToSignUp(navigate)}
          type={"submit"}
          fullWidth
          variant={"text"}
          color={"primary"}
        >
          Não possui conta? Cadastre-se
        </Button>
      </SignUpButtonContainer>
    </ScreenContainer>
  );
};

export default LoginPage;
