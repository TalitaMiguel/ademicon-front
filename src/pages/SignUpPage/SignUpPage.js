import React from "react";
import logo from "../../assets/images/logo7.png";
import { ScreenContainer, LogoImage } from "./styled";
import SignUpForm from "./SignUpForm";

const SignUpPage = () => {
  return (
    <ScreenContainer>
      <LogoImage src={logo} />
      <SignUpForm />
    </ScreenContainer>
  );
};

export default SignUpPage;
