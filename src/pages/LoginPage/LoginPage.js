import React from "react";
import logo from "../../assets/images/logo7.png";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { goToSignUp } from "../../routes/coordinator";
import { ScreenContainer, SignUpButtonContainer, LogoImage } from "./styled";
import LoginForm from "./LoginForm";

const LoginPage = ({ isLoggedButton, setIsLoggedButton }) => {
  const navigate = useNavigate();

  return (
    <ScreenContainer>
      <LogoImage src={logo} />
      <LoginForm
        isLoggedButton={isLoggedButton}
        setIsLoggedButton={setIsLoggedButton}
      />
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
