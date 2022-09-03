import React from "react";
import { ErrorPageContainer, ErrorImage, ErrorText } from "./styled";
import error from "../../assets/images/error.png"

const ErrorPage = () => {
  return (
    <ErrorPageContainer>
      <ErrorImage src={error} />
      <ErrorText>Página não encontrada!</ErrorText>
    </ErrorPageContainer>
  );
};

export default ErrorPage;
