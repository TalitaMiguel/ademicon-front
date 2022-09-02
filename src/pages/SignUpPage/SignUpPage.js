import React from "react";
import casa from "../../assets/images/carro-casa.png";
import { useNavigate } from "react-router-dom";
import { ScreenContainer, LogoImage } from "./styled";
import SignUpForm from "./SignUpForm";

const SignUpPage = () => {
  return (
    <ScreenContainer>
      <LogoImage src={casa} />
      <SignUpForm />
    </ScreenContainer>
  );
};

export default SignUpPage;
